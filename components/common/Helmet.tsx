import React from "react";
import Head from "next/head";

export const Helmet: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="description"
                content="Web site created using Create Next App"
            />
            <title>Sameer Waskar | Software Engineer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Helmet.displayName = "Helmet";
