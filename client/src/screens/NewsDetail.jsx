import "./styles/NewsDetail.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client";
import PortableText from "react-portable-text";
import NewsCard from "../components/NewsCard/NewsCard";

export default function NewsDetail() {
  const [news, setNews] = useState(null);
  const [otherNews, setOtherNews] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"]{
      title,
      slug,
      affiliate[]->{name,location},
      press_release,
      publishedAt,
      article,
      body
    }`
      )
      .then((data) => {
        setNews(data.find((each) => each.slug.current === slug));
        setOtherNews(
          data.filter((each) => each.slug.current !== slug).slice(0, 4)
        );
      })
      .catch(console.error);
  }, [slug]);

  if (news && otherNews) {
    return (
      <div className="max-w-6xl w-full mx-auto p-10">
        <Link to="/news" className="underline text-sm">
          &#60; Back to news
        </Link>
        <main className="newsDetail">
          <header className="my-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2 text-aajc-orange">
              {news.title}
            </h1>
            <h2>Published on {news.publishedAt}</h2>
          </header>
          <section>
            <ul className="flex flex-wrap gap-2">
              <li className="uppercase bg-aajc-lightorange text-aajc-darkgrey text-sm font-bold px-2 py-1 rounded-lg">
                {news.press_release ? "Press Release" : "News"}
              </li>
              {news.affiliate.map((city) => (
                <li className="uppercase bg-aajc-darkgrey text-white text-sm font-bold px-2 py-1 rounded-lg">
                  {city.location}
                </li>
              ))}
            </ul>
          </section>
          <article>
            <PortableText content={news.article} className="leading-7" />
          </article>
        </main>
        <aside>
          <h2 className="text-3xl font-bold tracking-tight py-8 border-t-2 border-aajc-lightorange text-aajc-orange">
            Latest News
          </h2>
          <section className="flex flex-wrap gap-2 justify-between">
            {otherNews.map((news) => (
              <div className="latestNews">
                <NewsCard news={news} />
              </div>
            ))}
          </section>
        </aside>
      </div>
    );
  } else {
    return null;
  }
}
