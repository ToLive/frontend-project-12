import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./pages/main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/404';

const Login: React.FC = lazy(() => import("./pages/login"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </React.StrictMode>
);
