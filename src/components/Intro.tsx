import { FC } from 'react';

import { Button } from './atom/Button';
import { Link } from './atom/Link';

export const Intro: FC = () => {
    return (
        <div className="pb-8 mt-4 mb-4 grid grid-cols-2 gap-2">
            <div>
                <p className="max-w-xl mb-4">
                    This site is a collective of all Ethereum / Web3 related
                    conferences in the current year of 2023. This is site uses
                    publicly obtainable information and a user-sourced knowledge
                    base. If you would like to{' '}
                    <Link
                        href="https://github.com/v3xlabs/devrel-events"
                        target="_blank"
                    >
                        Contribute
                    </Link>{' '}
                    visit our{' '}
                    <Link
                        href="https://github.com/v3xlabs/devrel-events"
                        target="_blank"
                    >
                        Github Repository
                    </Link>
                </p>
                <div className="flex gap-2">
                    <Button
                        as="a"
                        target="_blank"
                        href="https://github.com/v3xlabs/devrel-events"
                    >
                        Contribute
                    </Button>
                    <Button
                        className="bg-[#00acee]"
                        as="a"
                        target="_blank"
                        href="https://twitter.com/intent/follow?region=follow_link&screen_name=lucemansnl"
                    >
                        Follow
                    </Button>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full bg-blue-50 h-full"></div>
            </div>
        </div>
    );
};
