import { FC } from 'react';

import { DEvent } from '../data';

export const EventList: FC<{ events: [string, DEvent][] }> = ({ events }) => {
    return (
        <div className="mt-8">
            <h2 className="font-bold text-2xl pb-4 pt-2">Event List</h2>

            <div className="w-full">
                <div className="overflow-hidden bg-white shadow sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {events.map(([key, event]) => (
                            <li key={key}>
                                <a
                                    href={event.website}
                                    target="_blank"
                                    className="block hover:bg-gray-50"
                                >
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="truncate text-sm font-medium text-indigo-600">
                                                {event.name}
                                            </p>
                                            <div className="ml-2 flex flex-shrink-0">
                                                <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    {event.organizer}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    {/* <UsersIcon
                                                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                            aria-hidden="true"
                                                        /> */}
                                                    {event.country}
                                                </p>
                                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                    {/* <MapPinIcon
                                                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                            aria-hidden="true"
                                                        /> */}
                                                    {event.location}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                {/* <CalendarIcon
                                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                        aria-hidden="true"
                                                    /> */}
                                                <p>
                                                    Closing on{' '}
                                                    <time
                                                        dateTime={
                                                            event.end_date
                                                        }
                                                    >
                                                        {event.start_date}
                                                    </time>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
