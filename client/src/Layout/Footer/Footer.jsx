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
        <div className="flex max-w-6xl mx-auto p-10 gap-10 justify-between">
          <section className="flex flex-col justify-center w-4/12 gap-5">
            <img src={logo} width="120" alt="" />
            <div className="text-xs font-normal">
              Some rights reserved. All images used are licensed under the
              Creative Commons License. Please contact your local affiliate to
              learn more about our work.
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <header className="font-bold">Affiliates</header>
            <ul className="flex flex-col gap-4 text-sm font-normal">
              <li>Atalanta</li>
              <li>Chicago</li>
              <li>Los Angeles</li>
              <li>ALC - San Francisco</li>
              <li>AAJC - Washington D.C.</li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <header className="font-bold">Support</header>
            <ul className="flex flex-col gap-4 text-sm font-normal">
              <li>StandAgainstHatred</li>
              <li>Bystander Intervention</li>
              <li>Value Our Families</li>
              <li>Voting Rights</li>
              <li>Events</li>
              <li>Donations</li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <header>Follow Us</header>
            <ul className="flex gap-7">
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
