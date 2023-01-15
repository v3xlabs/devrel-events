export type DEvent = {
    name: string;
    start_date: `${number}-${number}-${number}`;
    end_date?: `${number}-${number}-${number}`;
    website?: string;
    location?: string;
    country?: string;
    city?: string;
    organizer: string;
};

export type DOrganizer = {
    name: string;
    website?: string;
};

declare module '*.toml' {
    const value: {
        organizers: Record<string, DOrganizer>;
        events: Record<string, DEvent>;
    };
    export default value;
}
