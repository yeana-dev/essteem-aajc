import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  const card = (news) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let newDate = news.publishedDate.split("-");
    let month = 0;
    newDate[1] < 10
      ? (month = months[newDate[1].slice(1)])
      : (month = months[newDate[1]]);
    return (
      <div className="news-card">
        <header className="bg-aajc-yellowWhite rounded-lg p-3">
          <ul className="flex flex-wrap gap-2">
            {news.affiliate.map((eachAffiliate, key) => (
              <li
                key={key}
                className="uppercase bg-aajc-darkgrey text-white text-xs font-bold px-2 py-1 rounded-lg"
              >
                {eachAffiliate.location}
              </li>
            ))}
            <li className="uppercase bg-aajc-lightorange text-aajc-darkgrey text-xs font-bold px-2 py-1 rounded-lg">
              {news.press_release ? "Press Release" : "News"}
            </li>
          </ul>
          <h1 className="pt-2 text-lg font-bold">{news.title}</h1>
        </header>
        <article>
          <p className="text-xs py-2 font-bold">
            {month} {newDate[2]}, {newDate[0]}
          </p>
          <p className="text-sm">{news.body}</p>
        </article>
      </div>
    );
  };
  if (news.link) {
    return (
      <a href={news.link} target="_blank" rel="noreferrer">
        {card(news)}
      </a>
    );
  } else {
    return <Link to={`/news/${news.slug.current}`}>{card(news)}</Link>;
  }
}
