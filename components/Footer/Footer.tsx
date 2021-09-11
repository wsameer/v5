import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row justify-between w-full">
            <div>
                <p>
                    <small className="text-white">
                        © 2019 All Rights Reserved.
                    </small>
                </p>
            </div>
            <div>
                <p className="text-white">Built with Next.js</p>
            </div>
        </footer>
    );
};

Footer.displayName = 'Footer';
