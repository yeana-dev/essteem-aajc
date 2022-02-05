import { Link } from "react-router-dom";
import logo from "../../assets/flame-logo.png";
import HelpDonate from "../../components/HelpDonate/HelpDonate";

export default function Footer() {
  return (
    <div>
      <HelpDonate />
      <footer className="bg-aajc-darkgrey text-white">
        <div className="flex max-w-6xl mx-auto p-10 gap-10 justify-between flex-col sm:flex-row">
          <section className="flex flex-col justify-center sm:w-4/12 text-center gap-5 items-center sm:items-start">
            <img src={logo} width="120" alt="" />
            <div className="text-xs font-normal sm:text-left">
              <p>
                Some rights reserved. All images used are licensed under the
                Creative Commons License. Please contact your local affiliate to
                learn more about our work.
              </p>
              <p className="my-4">
                Structured content powered by{" "}
                <a
                  href="https://www.sanity.io"
                  target="_blank"
                  rel="noopener norefer"
                  className="underline"
                >
                  Sanity.io
                </a>
              </p>
              <p>
                © 2022 Asian Americans Advancing Justice |{" "}
                <Link to="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-4 text-center">
            <header className="font-bold sm:text-left">Affiliates</header>
            <ul className="flex flex-col gap-4 text-sm font-normal sm:text-left">
              <li>
                <Link to="/about-us/atlanta">Atlanta</Link>
              </li>
              <li>
                <Link to="/about-us/chicago">Chicago</Link>
              </li>
              <li>
                <Link to="/about-us/los-angeles">Los Angeles</Link>
              </li>
              <li>
                <Link to="/about-us/san-francisco">ALC - San Francisco</Link>
              </li>
              <li>
                <Link to="/about-us/washington-dc">AAJC - Washington D.C.</Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-4 text-center">
            <header className="font-bold sm:text-left">Support</header>
            <ul className="flex flex-col gap-4 text-sm font-normal sm:text-left">
              <li>StandAgainstHatred</li>
              <li>Bystander Intervention</li>
              <li>Value Our Families</li>
              <li>Voting Rights</li>
              <li>Events</li>
              <li>Donations</li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}
