import { useRouteError } from "react-router-dom";
function error() {
    const error = useRouteError();
    return <div>
        <h1>oops</h1>
        <p>Sorry, something went wrong</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>;
}

export default error;