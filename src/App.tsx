import { FC, useMemo } from "react";
import data from '../data.toml';
import { Header } from "./Header";
import { sortEventByDate } from "./lib/sorteventbydate";

export const App: FC = () => {
    const events = useMemo(() => {
        const _events = Object.entries(data.events);

        const eventsByDate = _events.sort(sortEventByDate);

        return eventsByDate;
    }, []);

    return <div>
        <Header />
        <div style={{display: 'flex', gap: '2rem'}}>
            {
                events.map(([key, event]) => (
                    <div>
                        <div>{event.name}</div>
                        <div>{event.organizer}</div>
                        <div>{event.start_date}</div>
                        <div>{event.end_date}</div>
                        <div>{event.location}</div>
                    </div>
                ))
            }
        </div>
    </div>
};