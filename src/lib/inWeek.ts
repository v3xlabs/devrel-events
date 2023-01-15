/**
 * to check if an event should be rendered in a week we should check
 * - if the start date is before the end of the last day of the week
 * AND
 * - if the end date is after the beginning of the week
 */

import { DEvent } from '../data';

export const isInWeek = (event: DEvent, weekStart: Date, weekEnd: Date) => {
    const start = new Date(event.start_date);
    const end = new Date(event.end_date || event.start_date);

    return start <= weekEnd && end >= weekStart;
};
