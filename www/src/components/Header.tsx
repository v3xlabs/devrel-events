import { FC } from 'react';
import { GitHub } from 'react-feather';

export const Header: FC = () => {
    return (
        <div className="w-full relative max-w-[1376px] mx-auto mb-8">
            <div className="w-full max-w-[1376px] py-4 px-8 flex fixed z-10 border-b h-16 backdrop-blur-xl">
                <h1>DevRel Events</h1>
                <div>
                    <GitHub />
                </div>
            </div>
            <div className="w-full h-16" />
        </div>
    );
};
