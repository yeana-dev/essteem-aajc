import { useState, useEffect } from "react";
import sanityClient from "../../Client";
// import NewsCard from "../../components/NewsCard/NewsCard";

export default function News(props) {
  const [news, setNews] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"]{
      title,
      slug,
      affiliate,
      publishedAt,
      body,
      mainImage{
        asset->{
          _id,
          url
        },
      },
      link
    }`
      )
      .then((data) => setNews(data))
      .catch(console.error);
  }, []);
  console.log(news);
  return <div></div>;
}
