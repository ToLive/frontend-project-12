import React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LoginFormValues {
    login: string;
    password: string;
}

const Login: React.FC<{}> = () => {
    const initialValues: LoginFormValues = { login: '', password: '' };

    const loginSchema = yup.object().shape({
        login: yup.string().defined('Please, fill login'),
        password: yup.string().defined('Please, fill password'),
    });

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login Form</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            console.log({ values, actions });

                            actions.setSubmitting(false);
                        }}
                    >{({ errors, touched }) => (
                        <Form>
                            <div className="form-group mb-3">
                                <label htmlFor="login">Login</label>
                                <Field id="login" className={(touched.login && errors.login) ? 'form-control is-invalid' : 'form-control'} name="login" placeholder="" />
                                {errors.login && touched.login ? (
                                    <div className="invalid-feedback">{errors.login}</div>
                                ) : null}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <Field id="password" className={(touched.password && errors.password) ? 'form-control is-invalid' : 'form-control'} name="password" type="password" placeholder="" />
                                {errors.password && touched.password ? (
                                    <div className="invalid-feedback">{errors.password}</div>
                                ) : null}
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;