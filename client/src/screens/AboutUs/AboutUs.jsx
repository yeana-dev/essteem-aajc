import { useState, useEffect } from "react";
import sanityClient from "../../Client";
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
      <div>
        <header className="max-w-6xl mx-auto px-4">
          <h2>Together, we fight anti-Asian hate and discrimination.</h2>
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
        {affiliates &&
          affiliates.map((affiliate) => <div>{affiliate.name}</div>)}
      </div>
    </div>
  );
}
