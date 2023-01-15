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
        "-//DevRel Events//My Calendar 70.9054//EN",
        "2.0",
        "GREGORIAN",
        "PUBLISH",
        "example@gmail.com",
        "America/New_York",
    );

    // Get the UTC date of 2023-01-15 18:00:00 as DateTime
    let start_cal = Utc.with_ymd_and_hms(2023, 1, 15, 18, 0, 0).unwrap();
    let end_cal = Utc.with_ymd_and_hms(2023, 1, 15, 19, 0, 0).unwrap();
    let now = Utc::now();

    cal.add_event(Events {
        uid: "1234".to_string(),
        summary: "Test Event".to_string(),
        description: "This is a test event".to_string(),
        dtsart: start_cal,
        dtend: end_cal,
        created: now,
        last_modified: now,
        dtstamp: now,
        location: "Location".to_string(),
        sequence: 0,
        status: "CONFIRMED".to_string(),
        transp: "OPAQUE".to_string(),
    });

    // Export the calendar to a file
    cal.export_ics("./calendar.ics").unwrap();
}
