import { FC } from 'react';

import { DEvent } from '../../data';
import { isInWeek } from '../../lib/inWeek';
import { Day } from './Day';

export const Week: FC<{
    events: DEvent[];
    daysInWeek: number;
    now: number;
    year: number;
    month: number;
    start_day: number;
}> = ({ daysInWeek, now, year, month, start_day, events }) => {
    const end_day = start_day + daysInWeek;

    const start_date = new Date(year, month, start_day);
    const end_date = new Date(year, month, end_day, 23, 59, 59, 999);

    console.log({ start_date, end_date });

    return (
        <div className="grid grid-cols-7 gap-1 relative">
            {Array.from({
                length: daysInWeek,
            }).map((day, dayIndex) => (
                <Day
                    date={new Date(year, month, start_day + dayIndex)}
                    now={now}
                />
            ))}
            {events
                .filter((event) => isInWeek(event, start_date, end_date))
                .map((event) => (
                    <div
                        key={`${year}-${month}-${start_day}-${event.name}`}
                        className="absolute bg-red-500 h-2 w-2 bottom-0"
                    ></div>
                ))}
        </div>
    );
};
