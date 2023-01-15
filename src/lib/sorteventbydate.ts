import { DEvent } from '../data';

export const sortEventByDate = (
    [_a, a]: [string, DEvent],
    [_b, b]: [string, DEvent]
) => {
    return new Date(b.start_date).getDate() - new Date(a.start_date).getDate();
};
