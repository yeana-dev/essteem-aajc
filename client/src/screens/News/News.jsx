import { useState, useEffect } from "react";
import sanityClient from "../../Client";
import NewsCard from "../../components/NewsCard/NewsCard";

export default function News(props) {
  const [news, setNews] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"]{
      title,
      slug,
      affiliate->{
        name,
        location
      },
      press_release,
      publishedAt,
      body,
      link
    }`
      )
      .then((data) => setNews(data))
      .catch(console.error);
  }, []);
  console.log(news);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <header>
        <h1 className="font-bold text-2xl">News & Press Releases</h1>
      </header>
      <main>
        <h2 className="uppercase text-xl">Latest</h2>
        <div className="flex justify-between">
          {news && news.map((each) => <NewsCard key={each._id} news={each} />)}
        </div>
      </main>
    </div>
  );
}
