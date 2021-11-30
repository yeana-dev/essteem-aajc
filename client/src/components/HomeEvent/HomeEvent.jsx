import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import EventCard from "../EventCard/EventCard";

export default function HomeEvent() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "event"]{
      title,
      slug,
      affiliate->{
        name,
        location
      },
      mainImage{
        asset->{
          _id,
          url
        },
      },
      date,
      time,
      virtual,
      link,
      description
    }`
      )
      .then((data) => {
        setEvents(data.splice(0, 2));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-5 my-5">
      <header className="flex">
        <div className="flex-1"></div>
        <h1 className="text-3xl font-bold text-center flex-none">Events</h1>
        <Link
          to="/events"
          className="text-xs font-normal underline uppercase flex-1 text-right"
        >
          See all events
        </Link>
      </header>
      {events && events.map((event) => <EventCard event={event} />)}
    </div>
  );
}
