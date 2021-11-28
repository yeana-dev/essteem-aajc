import { useState, useEffect } from "react";
import sanityClient from "../../Client";
import NewsCard from "../../components/NewsCard/NewsCard";

export default function News(props) {
  let locations = [];
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

  if (news && news.length > 0) {
    news.map((each) => {
      if (!locations.includes(each.affiliate.location)) {
        return locations.push(each.affiliate.location);
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <header>
        <h1 className="font-bold text-3xl">News & Press Releases</h1>
      </header>
      <form>
        <label for="search" />
        <input
          type="text"
          name="search"
          placeholder="Search for News & Press Releases"
        />
        <select>
          <option value="" selected disabled hidden>
            Location
          </option>
          {locations.map((location) => (
            <option>{location}</option>
          ))}
        </select>
      </form>
      <main>
        <h2 className="uppercase text-lg font-semibold py-5">Latest</h2>
        <div className="flex justify-between flex-wrap gap-10">
          {news && news.map((each) => <NewsCard key={each._id} news={each} />)}
        </div>
      </main>
    </div>
  );
}
