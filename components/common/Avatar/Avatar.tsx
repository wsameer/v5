import React from 'react';
import type { AvatarProps } from './types';
import Image from 'next/image';

export const Avatar: React.FC<AvatarProps> = React.memo(
    ({ srcFile, width, bgColor }) => {
        return (
            <div className="flex items-center text-center justify-center">
                <Image
                    className={`rounded-full bg-${bgColor}-600`}
                    src={srcFile}
                    alt="Person Avatar"
                    width={width}
                    height={width}
                    loading="lazy"
                />
            </div>
        );
    }
);

Avatar.defaultProps = {
    bgColor: 'grey',
    width: '20'
};

Avatar.displayName = 'Avatar';
