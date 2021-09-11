import React from 'react';
import { Code, Heart } from 'react-feather';
import Image from 'next/image';
import buildWithNext from '/public/img/build-with-nextjs.png';

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row justify-between w-full">
            <div>
                <p className="flex flex-row">
                    <Code className="text-gray-300" size={20} />
                    <small className="text-gray-300">&nbsp;with&nbsp;</small>
                    <Heart className="text-red-600" size={18} />
                    <small className="text-gray-300">
                        &nbsp;by Sameer Waskar © 2021.
                    </small>
                </p>
            </div>
            <div>
                <a
                    href="https://nextjs.org/"
                    rel="noreferrer"
                    target="_blank"
                    className="w-24"
                >
                    <Image
                        width="100"
                        height="18"
                        alt="project build with Next.js"
                        src={buildWithNext}
                    />
                </a>
            </div>
        </footer>
    );
};

Footer.displayName = 'Footer';
