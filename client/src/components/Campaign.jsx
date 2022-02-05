import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import PortableText from "react-portable-text";

export default function Campaign(props) {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const [campaigns, setCampaigns] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "campaign"]{
      image{
      asset->{
        _id,
        url
      },
    },
    body
    }`
      )
      .then((data) => {
        setCampaigns(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold text-center mb-20">
        Affiliation-Wide Campaigns
      </h1>
      <div className="affliationWideCampaigns flex flex-col sm:flex-row flex-wrap gap-12 justify-evenly">
        {campaigns !== null && (
          <>
            {campaigns.map((campaign) => (
              <div className="item sm:w-5/12 flex flex-col gap-3">
                <img src={urlFor(campaign.image.asset.url).url()} alt="" />
                <PortableText
                  content={campaign.body}
                  className="text-sm text-center"
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
