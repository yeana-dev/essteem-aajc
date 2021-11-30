import "./NewsCard.css";

export default function NewsCard({ news }) {
  return (
    <div className="news-card">
      <a href={news.link} target="_blank" rel="noreferrer">
        <header className="bg-aajc-yellowWhite rounded-lg p-3">
          <div>
            <button className="uppercase bg-aajc-darkgrey text-white text-xs font-bold px-2 py-1 rounded-lg mr-2">
              {news.affiliate.location}
            </button>
            <button className="uppercase bg-aajc-lightorange text-aajc-darkgrey text-xs font-bold px-2 py-1 rounded-lg">
              {news.press_release ? "Press Release" : "News"}
            </button>
          </div>
          <h1 className="pt-2 text-lg font-bold">{news.title}</h1>
        </header>
        <article>
          <p className="text-xs py-2 font-bold">{news.publishedAt}</p>
          <p className="text-sm">{news.body}</p>
        </article>
      </a>
    </div>
  );
}
