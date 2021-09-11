import React from 'react';
import Head from 'next/head';

export const Helmet: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="keywords"
                content="Software Engineer,React Training,JavaScript Training,Fullstack Developer"
            />
            <meta
                name="description"
                content="Sameer specializes in architecting exceptional digital experiences"
            />
            <meta name="robots" content="index" />
            <title>Sameer Waskar</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Helmet.displayName = 'Helmet';
