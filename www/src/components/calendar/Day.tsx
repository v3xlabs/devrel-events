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
                    'bg-blue-50',
                    'bg-blue-100 border-2 border-blue-500',
                    'bg-blue-200',
                ][hasHappened]
            )}
        >
            <span
                className={cx(
                    hasHappened == 1
                        ? 'text-opacity-100 text-blue-500 font-bold'
                        : 'text-opacity-30 text-black',
                    'pl-1'
                )}
            >
                {date.getDate()}
            </span>
        </div>
    );
};
