import { FC } from 'react';
import { GitHub } from 'react-feather';

import { Link } from './atom/Link';

export const Header: FC = () => {
    return (
        <div className="w-full relative max-w-[1376px] mx-auto mb-8">
            <div className="w-full max-w-[1376px] py-4 px-8 flex fixed z-10 border-b h-16 backdrop-blur-xl justify-between">
                <h1>DevRel Events</h1>
                <div>
                    <Link
                        href="https://github.com/v3xlabs/devrel-events"
                        target="_blank"
                    >
                        <GitHub />
                    </Link>
                </div>
            </div>
            <div className="w-full h-16" />
        </div>
    );
};
