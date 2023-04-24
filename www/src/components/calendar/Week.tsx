import { FC } from 'react';

import { DEvent } from '../../data';
import { colorFormIndex } from '../../lib/color-from-index';
import { isInWeek } from '../../lib/inWeek';
import { notWith } from '../../lib/utils';
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
            <div className="absolute left-0 right-0 w-full bottom-0">
                <div className="relative">
                    {events
                        .filter((event) =>
                            isInWeek(event, start_date, end_date)
                        )
                        .reverse()
                        .map((event, index) => {
                            const end = notWith(
                                new Date(event.end_date || event.start_date),
                                (event_end_date) =>
                                    event_end_date.getMonth() > month
                                        ? daysInWeek
                                        : Math.min(
                                            Math.max(
                                                event_end_date.getDate() -
                                                start_day +
                                                1,
                                                0
                                            ),
                                            7
                                        )
                            );
                            const start = notWith(
                                new Date(event.start_date),
                                (event_start_date) =>
                                    event_start_date.getMonth() < month
                                        ? 0
                                        : Math.max(
                                            event_start_date.getDate() -
                                            start_day,
                                            0
                                        )
                            );

                            return (
                                <div className="w-full flex">
                                    <div
                                        className="h-1"
                                        style={{
                                            width: `${(start / 7) * 100}%`,
                                        }}
                                    />
                                    <div
                                        key={`${year}-${month}-${start_day}-${event.name}`}
                                        className="grow h-2 bottom-0 z-10 overflow-hidden"
                                        style={{
                                            background: colorFormIndex(index),
                                            // left: `${(start / 7) * 100}%`,
                                            // right: `${((7 - end) / 7) * 100}%`,
                                        }}
                                    >
                                        <span
                                            className="text-[0.5rem] block"
                                            style={{ marginTop: '-0.25em' }}
                                        >
                                            {event.name}
                                        </span>
                                    </div>
                                    <div
                                        className="h-1"
                                        style={{
                                            width: `${((7 - end) / 7) * 100}%`,
                                        }}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
