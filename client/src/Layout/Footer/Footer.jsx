import { Link } from "react-router-dom";

import logo from "../../assets/flame-logo.png";
import twitterLogo from "../../assets/twitter.png";
import instagramLogo from "../../assets/instagram.png";
import facebookLogo from "../../assets/facebook.png";
import githubLogo from "../../assets/github.png";
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
              Some rights reserved. All images used are licensed under the
              Creative Commons License. Please contact your local affiliate to
              learn more about our work.
            </div>
          </section>
          <section className="flex flex-col gap-4 text-center">
            <header className="font-bold sm:text-left">Affiliates</header>
            <ul className="flex flex-col gap-4 text-sm font-normal sm:text-left">
              <li>
                <Link to="/about-us/atlanta">Atalanta</Link>
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
          <section className="flex flex-col gap-4 text-center">
            <header className="font-bold sm:text-left">Follow Us</header>
            <ul className="flex gap-7 justify-center sm:justify-start">
              <li>
                <a href="https://twitter.com/Adv_Justice">
                  <img src={twitterLogo} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={facebookLogo} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={instagramLogo} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={githubLogo} alt="" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}
