import { FC, useMemo } from 'react';

import { Month } from './Month';

export const Calendar: FC<{ year: number }> = ({ year }) => {
    const months = useMemo(() => Array.from({ length: 12 }), []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8">
            {months.map((month, index) => (
                <Month key={index} events={[]} month={index} year={year} />
            ))}
        </div>
    );
};
