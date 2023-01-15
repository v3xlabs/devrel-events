import { FC, useMemo } from 'react';

import { cx } from '../../lib/cx';

export const Day: FC<{
    date: Date;
    now: number;
}> = ({ date, now }) => {
    const hasHappened = useMemo(() => {
        if (date.getTime() < now) return 0;

        if (date.getTime() > now) return 2;

        return 1;
    }, [date]);

    return (
        <div
            className={cx(
                'w-full aspect-square',
                [
                    'bg-blue-50 dark:bg-neutral-700 dark:saturate-50 dark:bg-opacity-50',
                    'bg-blue-100 border-2 border-blue-500 dark:bg-neutral-400 dark:saturate-50 dark:bg-opacity-50',
                    'bg-blue-200 dark:bg-neutral-500 dark:bg-opacity-75',
                ][hasHappened]
            )}
        >
            <span
                className={cx(
                    hasHappened == 1
                        ? 'text-opacity-100 text-blue-500 font-bold dark:text-gray-50'
                        : 'text-opacity-30 text-black dark:text-gray-50 dark:text-opacity-50',
                    'pl-1'
                )}
            >
                {date.getDate()}
            </span>
        </div>
    );
};
