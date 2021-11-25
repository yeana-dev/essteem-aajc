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
      <img src={urlFor(news.mainImage.asset.url).width(200).url()} alt="" />
      <ul>
        <li>{news.affiliate.name}</li>
        <li>
          <a href={news.link} target="_blank" rel="noreferrer">
            Link
          </a>
        </li>
        <li>{news.body}</li>
      </ul>
    </div>
  );
}
