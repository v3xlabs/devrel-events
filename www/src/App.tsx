import { FC, useMemo } from 'react';

import data from '../../data.toml';
import { Calendar } from './components/calendar/Calendar';
import { EventList } from './components/EventList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { DEvent } from './data';
import { sortEventByDate } from './lib/sorteventbydate';

export const App: FC = () => {
    const events = useMemo(() => {
        const _events = Object.entries<DEvent>(data.events);

        return _events.sort(sortEventByDate);
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 dark:bg-black dark:text-gray-50">
            <Header />
            <div className="mx-auto w-full max-w-[1376px] px-8">
                <div>
                    <Intro />
                    <Calendar
                        year={2023}
                        events={events.map(([_, event]) => event)}
                    />
                    <EventList events={events} />
                </div>
                <Footer />
            </div>
        </div>
    );
};
