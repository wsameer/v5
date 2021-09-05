import React from "react";
import Head from "next/head";

export const Helmet: React.FC = () => {
    return (
        <Head>
            <title>Create Next App</title>
            <meta
                name="description"
                content="Web site created using create-snowpack-app"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Helmet.displayName = "Helmet";
