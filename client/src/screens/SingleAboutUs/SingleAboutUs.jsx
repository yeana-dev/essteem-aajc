import { useState, useEffect } from "react";
import sanityClient from "../../client";
import { useLocation } from "react-router-dom";

export default function SingleAboutUs() {
  const [affiliate, setAffiliate] = useState(null);
  let location = useLocation();
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
      .then((data) => {
        setAffiliate(
          data.find((each) => each.slug.current === location.pathname.slice(10))
        );
      })
      .catch(console.error);
  }, [location.pathname]);

  return (
    <div className="bg-aajc-lightorange">
      <div className="max-w-6xl mx-auto">
        {affiliate && (
          <div className="flex justify-between gap-10 items-center flex-col-reverse md:flex-row">
            <section className="flex flex-col justify-center items-center gap-10 p-5 md:px-0">
              <h1 className="text-2xl font-bold tracking-tighter">
                {affiliate.name}
              </h1>
              <p className="leading-loose">{affiliate.bio}</p>
              <p className="text-sm font-semibold">
                To learn more about our work and donate, please visit our{" "}
                <a
                  href={affiliate.link}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  main site
                </a>
                .
              </p>
            </section>
            <img
              src={affiliate.image.asset.url}
              alt=""
              className="object-cover md:w-1/2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
