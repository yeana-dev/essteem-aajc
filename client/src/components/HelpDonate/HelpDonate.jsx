import { Link } from "react-router-dom";

export default function HelpDonate() {
  return (
    <div className="bg-aajc-yellowWhite">
      <div className="flex flex-col max-w-6xl mx-auto p-10 gap-6">
        <section className="text-xl font-bold">
          Help us promote a fair and equitable society for all through a small
          donation.
        </section>
        <section className="flex justify-between">
          <Link to="/donate">
            <button className="uppercase font-bold bg-aajc-orange px-6 py-3 rounded-md">
              Donate
            </button>
          </Link>
          <a href="#top" className="uppercase underline text-sm">
            Back to top
          </a>
        </section>
      </div>
    </div>
  );
}
