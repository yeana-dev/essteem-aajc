import donateHeader from "../../assets/donateheader.png";
import sanityClient from "../../Client";
import { useState, useEffect } from "react";

export default function Donate() {
  const [donations, setDonations] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "donation"]{
      affiliate->{
        name
      },
      link
    }`
      )
      .then((data) => {
        setDonations(data);
      })
      .catch(console.error);
  }, []);
  console.log(donations);

  function openLink(link) {
    window.open(link);
  }
  return (
    <div className="max-w-6xl w-full mx-auto p-10">
      <header className="text-center flex flex-col gap-10">
        <h1 className="font-bold text-3xl">Donate Today</h1>
        <h2 className="text-xl font-semibold">
          Help us promote a fair and equitable society for all through a small
          donation
        </h2>
        <p className="text-sm">
          The donate links will redirect you to the affiliate’s donation page.
        </p>
      </header>
      <img src={donateHeader} alt="" className="my-10 rounded" />
      <div className="flex flex-col gap-4">
        {donations &&
          donations.map((donation) => (
            <div className="bg-aajc-yellowWhite rounded-md px-5 py-3 flex justify-between items-center">
              <h1 className="font-semibold text-lg">
                {donation.affiliate.name}
              </h1>
              <button
                className="bg-aajc-orange px-7 py-3 rounded font-bold uppercase text-sm"
                onClick={() => openLink(donation.link)}
              >
                Donate
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
