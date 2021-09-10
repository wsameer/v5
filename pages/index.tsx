import type { NextPage } from 'next';
import React from 'react';
import { Helmet } from '@components/common/Helmet';
import PageLayout from '@components/layout/PageLayout';
import SideBox from '@components/SideBox';
import App from '@components/App';

const Home: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-700 md:p-6">
            <Helmet />
            <PageLayout>
                <SideBox />
                <App />
            </PageLayout>
        </div>
    );
};

export default Home;
