import { FC, useMemo } from 'react';

import { DEvent } from '../data';
import { getDaysInMonth } from '../lib/time';
import { notWith } from '../lib/utils';
import { Day } from './Day';

const MONTHS = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const Month: FC<{
    events: DEvent[];
    month: number;
    year: number;
}> = ({ events, month, year }) => {
    const daysThisMonth = useMemo(
        () => getDaysInMonth(year, month),
        [year, month]
    );
    const moduleWeeks = useMemo(
        () => Array.from({ length: Math.ceil(daysThisMonth / 7) }),
        []
    );

    const now = notWith(new Date(), (now) =>
        new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
    );

    return (
        <div>
            <div className="font-bold pl-2 pb-2">{MONTHS[month]}</div>
            <div className="relative flex flex-col gap-1">
                {moduleWeeks.map((_, index) => (
                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({
                            length: Math.min(daysThisMonth - 7 * index, 7),
                        }).map((day, dayIndex) => (
                            <Day
                                date={
                                    new Date(year, month, index * 7 + dayIndex)
                                }
                                now={now}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
