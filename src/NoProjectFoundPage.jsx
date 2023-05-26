import React from 'react';
import { useRouteError } from "react-router-dom";

function NoProjectFoundPage() {
    // const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, the project you're looking for is nowhere to be found.</p>
        </div>
    );
}

export default NoProjectFoundPage;
