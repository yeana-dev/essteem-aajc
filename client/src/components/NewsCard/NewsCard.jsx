import "./NewsCard.css";

export default function NewsCard({ news }) {
  return (
    <div className="news-card">
      <header className="bg-aajc-yellowWhite rounded-lg p-3">
        <div>
          <button className="uppercase bg-aajc-darkgrey text-white text-xs font-semibold p-1 rounded-md mr-1">
            {news.affiliate.location}
          </button>
          <button className="uppercase bg-aajc-lightorange text-aajc-darkgrey text-xs font-semibold p-1 rounded-md">
            {news.press_release ? "Press Release" : "News"}
          </button>
        </div>
        <h1 className="pt-2 text-xl font-bold">{news.title}</h1>
      </header>
      <article>
        <p className="text-xs">{news.publishedAt}</p>
        <p className="text-sm">{news.body}</p>
      </article>
    </div>
  );
}
