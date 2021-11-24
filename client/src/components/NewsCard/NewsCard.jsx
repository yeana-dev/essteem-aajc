import { Link } from "react-router-dom";

import sanityClient from "../../Client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(src) {
  return builder.image(src);
}

export default function NewsCard({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <img src={news.mainImage.asset.url} alt="" />
      <ul>
        {/* <li>{news.affiliate}</li> */}
        <li>{news.link}</li>
      </ul>
    </div>
  );
}
