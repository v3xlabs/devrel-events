import { FC } from 'react';

import { Button } from './atom/Button';
import { Link } from './atom/Link';

export const Intro: FC = () => {
    return (
        <div className="pb-8 mt-4 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="w-screen sm:w-full -mx-8 sm:m-0">
                <div className="w-full bg-blue-50 dark:bg-neutral-700 dark:bg-opacity-50 h-full p-8 flex flex-col justify-center gap-4">
                    <p>
                        DevRel Events is also available as an easy to add
                        calendar!
                    </p>
                    <Button
                        as="a"
                        href="https://devrel.events/calendar.ics"
                        target="_blank"
                        className="w-full sm:w-fit"
                    >
                        Add to Calendar
                    </Button>
                </div>
            </div>
        </div>
    );
};
