import type { NextPage } from "next";
import React from "react";
import { Helmet } from "@components/common/Helmet";

const Home: NextPage = () => {
    return (
        <div>
            <Helmet />
            <main className="flex h-screen">
                <h1 className="m-auto text-8xl">
                    Welcome to{" "}
                    <a
                        className="text-blue-700 hover:underline"
                        href="https://nextjs.org"
                    >
                        {" "}
                        Next.js!
                    </a>
                </h1>
            </main>
        </div>
    );
};

export default Home;
