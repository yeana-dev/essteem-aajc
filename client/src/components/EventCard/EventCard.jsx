import sanityClient from "../../Client";
import imageUrlBuilder from "@sanity/image-url";

export default function EventCard({ event }) {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(event);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newDate = event.date.split("-").slice(1);
  let month = 0;
  newDate[0] < 10 ? (month = newDate[0].slice(1)) : (month = newDate[0]);

  function openLink() {
    window.open(event.link);
  }

  return (
    <div className="flex items-start">
      <div className="bg-aajc-yellowWhite p-2 text-center">
        <p className="text-xs">{months[month - 1]}</p>
        <p className="text-2xl font-bold">{newDate[1]}</p>
      </div>
      <section>
        <h1>{event.title}</h1>
        <h2>{event.time}</h2>
        <p>Hosted by {event.affiliate.location} Affiliate</p>
        <p>{event.description}</p>
      </section>
      <div>
        <img src={urlFor(event.mainImage.asset.url).width(200).url()} />
        <button type="button" onClick={() => openLink()}>
          View Event
        </button>
      </div>
    </div>
  );
}
