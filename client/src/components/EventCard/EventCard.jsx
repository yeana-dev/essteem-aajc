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
    <div className="flex items-start gap-4">
      <section className="flex items-left w-20">
        <div className="w-full bg-aajc-yellowWhite py-3 text-center rounded-md">
          <p className="text-xs">{months[month - 1]}</p>
          <p className="text-2xl font-bold">{newDate[1]}</p>
        </div>
      </section>
      <section className="w-2/3 flex flex-col gap-1">
        <h1 className="font-bold text-2xl">{event.title}</h1>
        <h2 className="font-semibold">{event.time}</h2>
        <p className="text-aajc-orange font-semibold text-sm">
          Hosted by {event.affiliate.location} Affiliate
        </p>
        <p className="text-sm">{event.description}</p>
      </section>
      <div className="flex flex-col flex-grow gap-2">
        <img
          src={urlFor(event.mainImage.asset.url).width(200).height(120).url()}
          className="rounded"
        />
        <button
          type="button"
          onClick={() => openLink()}
          className="border border-dark rounded py-2 uppercase text-xs font-semibold"
        >
          View Event
        </button>
      </div>
    </div>
  );
}
