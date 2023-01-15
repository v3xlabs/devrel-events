import { FC, useMemo } from 'react';

import { DEvent } from '../../data';
import { getDaysInMonth } from '../../lib/time';
import { notWith } from '../../lib/utils';
import { Week } from './Week';

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
                    <Week
                        daysInWeek={Math.min(daysThisMonth - 7 * index, 7)}
                        month={month}
                        now={now}
                        start_day={index * 7}
                        year={year}
                        events={events}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
