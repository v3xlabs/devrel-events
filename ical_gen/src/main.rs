#![warn(clippy::all, clippy::pedantic, clippy::nursery)]

use chrono::{DateTime, Utc};
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

    let start_cal: DateTime<Utc> = Utc::now();

    cal.add_event(Events {
        dtsart: start_cal,
        dtend: start_cal,
        uid: "786566jhjh5546@google.com".to_string(),
        created: start_cal,
        description: "The description".to_string(),
        last_modified: start_cal,
        location: "Breda NL".to_string(),
        sequence: 0,
        status: "CONFIRMED".to_string(),
        summary: "My business (Not available)".to_string(),
        transp: "OPAQUE".to_string(),
        dtstamp: start_cal,
    });

    cal.export_ics("./calendar.ics").unwrap();
}
