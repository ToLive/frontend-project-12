import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: unknown = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, no such page found.</p>
            <p>
                <i>{error instanceof Error && isRouteErrorResponse(error) ? error.statusText || error.message : ''}</i>
            </p>
        </div>
    );
}