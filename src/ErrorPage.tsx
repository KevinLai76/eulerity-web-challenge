import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
            404 not found
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default ErrorPage