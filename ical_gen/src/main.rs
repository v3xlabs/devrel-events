#![warn(clippy::all, clippy::pedantic, clippy::nursery)]

use chrono::{DateTime, TimeZone, Utc};
use serde_derive::Deserialize;
use std::collections::HashMap;
use std::fs;
use web_ical::{Calendar, Events};

use toml;

#[derive(Deserialize)]
struct Data {
    events: HashMap<String, Event>,
    organizers: HashMap<String, Organizer>,
}

#[derive(Deserialize)]
struct Event {
    name: String,
    description: Option<String>,
    start_date: String,
    end_date: Option<String>,
    organizer: String,
    location: Option<String>,
    country: Option<String>,
    city: Option<String>,
    website: Option<String>,
    twitter: Option<String>,
}

#[derive(Deserialize)]
struct Organizer {
    name: String,
    email: Option<String>,
}

fn main() {
    println!("Hello, world!");

    let filename = "../data.toml";

    let contents = fs::read_to_string(filename).expect("Something went wrong reading the file");

    let data: Data = toml::from_str(&contents).unwrap();

    println!("{:?}", data.organizers.len());

    // Create a new calendar
    let mut cal = Calendar::create(
        "-//V3X Labs//DevRel Events//EN",
        "2.0",
        "GREGORIAN",
        "PUBLISH",
        "DevRel Events",
        "UTC",
    );

    // Get the current timestamp as a date
    let now = Utc::now();

    // For each event, add it to the calendar
    for (key, value) in data.events {
        println!("{}: {}", key, value.name);

        let start_cal = Utc
            .datetime_from_str(
                &format!("{}-00-00-00", value.start_date),
                "%Y-%m-%d-%H-%M-%S",
            )
            .unwrap();
        let end_cal = Utc
            .datetime_from_str(
                &format!("{}-00-00-00", value.end_date.unwrap_or(value.start_date)),
                "%Y-%m-%d-%H-%M-%S",
            )
            .unwrap();

        let description = value
            .description
            .unwrap_or("No description available".to_string());
        let location = value
            .location
            .unwrap_or("No location available".to_string());

        cal.add_event(Events {
            uid: key,
            summary: value.name,
            description,
            dtsart: start_cal,
            dtend: end_cal,
            created: now,
            last_modified: now,
            dtstamp: now,
            location,
            sequence: 0,
            status: "CONFIRMED".to_string(),
            transp: "TRANSPARENT".to_string(),
        });
    }

    // Export the calendar to a file
    cal.export_ics("./calendar.ics").unwrap();
}
