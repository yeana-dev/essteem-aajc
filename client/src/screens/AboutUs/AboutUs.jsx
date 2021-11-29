import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import "./AboutUs.css";

export default function AboutUs(props) {
  const [affiliates, setAffiliates] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "affiliate"]{
      name,
      slug,
      link,
      publishedAt,
      bio,
      image{
        asset->{
          _id,
          url
        },
      },
    }`
      )
      .then((data) => setAffiliates(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <header className="flex flex-col gap-7">
          <h2 className="text-aajc-orange font-bold text-3xl text-center">
            Together, we fight anti-Asian hate and discrimination.
          </h2>
          <p>
            Asian Americans Advancing Justice (Advancing Justice) is a national
            affiliation of five civil rights nonprofit organizations.
          </p>
          <p>We are independently led, operated and funded.</p>
          <p>
            We share a common mission to promote a fair and equitable society
            for all by working for civil and human rights that empower Asian
            Americans and Pacific Islanders and other underserved communities.
          </p>
        </header>
        <div className="flex py-10">
          {affiliates &&
            affiliates.map((affiliate) => (
              <div className="flex flex-col gap-2 items-center px-3">
                <img src={affiliate.image.asset.url} />
                <p className="text-sm font-semibold text-center">
                  {affiliate.name}
                </p>
                <Link
                  to={`/about-us/${affiliate.slug.current}`}
                  className="text-xs underline uppercase"
                >
                  Learn More
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
