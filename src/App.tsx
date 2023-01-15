import { FC, useMemo } from 'react';

import data from '../data.toml';
import { Calendar } from './components/Calendar';
import { EventList } from './components/EventList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DEvent } from './data';
import { sortEventByDate } from './lib/sorteventbydate';

export const App: FC = () => {
    const events = useMemo(() => {
        const _events = Object.entries<DEvent>(data.events);

        return _events.sort(sortEventByDate);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
            <Header />
            <div className="mx-auto w-full max-w-[1376px] xl:px-8">
                <div>
                    <Calendar year={2023} />
                    <EventList events={events} />
                </div>
                <Footer />
            </div>
        </div>
    );
};
