import "./Home.css";
import sanityClient from "../../client";
import { useState, useEffect } from "react";
import HomeEvent from "../../components/HomeEvent/HomeEvent";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

import StandAgainstHatred from "../../assets/StandAgainstHatred.png";
import hollaback from "../../assets/bystander.png";
import supportFamilies from "../../assets/valueOurFamilies.png";
import votingRight from "../../assets/votingright.png";

export default function Home() {
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "carousel"]{
      heading,
      subHeading,
      link,
      image{
        asset->{
          _id,
          url
        },
      },
    }`
      )
      .then((data) => setSlides(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {slides && <HomeSlider slides={slides} />}
      <div className="home max-w-6xl mx-auto px-4">
        <header className="text-center flex flex-col gap-5 my-5">
          <h3 className="text-lg font-semibold">Our Mission</h3>
          <h2 className="text-xl w-2/3 mx-auto">
            To promote a fair and equitable society for all by working for civil
            and human rights that empower Asian Americans and Pacific Islanders
            and other underserved communities
          </h2>
        </header>

        <div className="flex gap-3 my-5 flex-col sm:flex-row">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-aajc-orange font-bold text-3xl">
              $543,750
            </h1>
            <h3 className="text-center text-sm">
              saved in citizenship fees for low-income immigrants, through
              successful fee waivers
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-center text-aajc-orange font-bold text-3xl">
              7,596
            </h1>
            <h3 className="text-center text-sm">
              calls resolved through 8 Asian Language Legal Intake Project
              helplines in 12 languages/dialects
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-center text-aajc-orange font-bold text-3xl">
              14,910
            </h1>
            <h3 className="text-center text-sm">
              individuals enrolled in state and local health coverage and safety
              net programs
            </h3>
          </div>
        </div>

        <div className="flex justify-center my-5">
          <button className="border border-dark px-5 py-1 text-sm font-bold rounded-md">
            LEARN MORE
          </button>
        </div>

        <div className="coverStory flex p-10 lg:justify-between">
          <div className="emptyContainer lg:w-1/2"></div>
          <div className="lg:w-1/3 text-white flex flex-col gap-3">
            <h3 className="titlefont-bold text-xl">
              Elderly Korean Man Targeted by Hate
            </h3>
            <h5 className="date">September 29, 2021</h5>
            <h5 className="source text-xs">Source: Stand against Hatred</h5>
            <p className="text-sm">
              Elderly Korean man was driving in his van near the corner of E.
              Washington and S. Central Ave in Los Angeles. A woman approached
              the van and started beating on the windows, yelling at him to go
              back to Asia and other negative comments about Asians. She yanked
              the windshield wiper of the car until it broke and damaged the
              car. The elder waited until she moved back to drive away and avoid
              further damage to the car. He was not sure how to deal with the
              situation with his limited English speaking skills.
            </p>
            <a
              href="https://www.standagainsthatred.org/stories"
              target="_blank"
              rel="noreferrer"
              className="underline text-sm"
            >
              View More
            </a>
          </div>
        </div>
        <div className="affiliation-wide">
          <h1 className="text-2xl font-bold text-center">
            Affiliation-Wide Campaigns
          </h1>
          <div className="affliationWideCampaigns flex flex-col sm:flex-row flex-wrap gap-12 justify-evenly">
            <div className="item sm:w-5/12 flex flex-col gap-3">
              <img className="imageCol" src={StandAgainstHatred} alt="" />
              <p className="text-sm">
                We encourage community members who have experienced anti-Asian
                hate to share their experiences and report to our website
                StandAgainstHatred.org. We document hate crimes, harassment, and
                discrimination experienced by our community.
              </p>
              <a
                href="https://www.standagainsthatred.org/"
                target="_blank"
                rel="noreferrer"
                className="underline text-sm uppercase text-center"
              >
                standagainsthatred.org
              </a>
            </div>

            <div className="item sm:w-5/12 flex flex-col gap-3">
              <img className="imageCol" src={hollaback} alt="" />
              <p className="text-sm">
                We believe every person can safely take action against incidents
                of anti-Asian hate. Register for free training with any of our
                affiliates below.
              </p>
              <ul className="refs flex flex-wrap gap-3 justify-center underline uppercase text-sm">
                <li>
                  <a
                    href="https://www.ihollaback.org/bystanderintervention/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Atlanta
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.advancingjustice-chicago.org/what-we-do/bystander-intervention-trainings/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chicago
                  </a>
                </li>
                <li>
                  <a
                    href="https://advancingjustice-la.org/bystander-intervention-trainings/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Los Angeles
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.advancingjustice-alc.org/stop-anti-asian-hate/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ALC (San Francisco)
                  </a>
                </li>
                <li>
                  <a
                    href="https://advancingjustice-aajc.org/anti-asian-hate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AAJC (Washington D.C.)
                  </a>
                </li>
              </ul>
            </div>

            <div className="item sm:w-5/12 flex flex-col gap-3">
              <img className="imageCol" src={supportFamilies} alt="" />
              <p className="text-sm">
                We exist to protect, preserve, and strengthen the family
                immigration system and promote an immigration system that is
                informed by love, empathy, and justice.
              </p>
              <a
                href="https://www.valueourfamilies.org/"
                target="_blank"
                rel="noreferrer"
                className="underline text-sm uppercase text-center"
              >
                valueourfamilies.org
              </a>
            </div>

            <div className="item sm:w-5/12 flex flex-col gap-3">
              <img className="imageCol" src={votingRight} alt="" />
              <p className="text-sm">
                The Voting Rights Project has created several tools for
                community-based organizations to use to educate their community
                members about the voting process.
              </p>

              <div className="refs">
                <ul className="refs flex flex-wrap gap-3 justify-center underline uppercase text-sm">
                  <li>
                    <a
                      href="https://www.advancingjustice-atlanta.org/voting-elections"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Atlanta
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.advancingjustice-chicago.org/what-we-do/civic-engagement/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chicago
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://advancingjustice-la.org/advocacy/laws-and-issues-essential-to-well-being/voting-rights/voting-rights-tools-and-resources/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Los Angeles
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.advancingjustice-alc.org/programs/voting-rights/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ALC (San Francisco)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.advancingjustice-aajc.org/know-your-rights"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AAJC (Washington D.C.)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <HomeEvent />
      </div>
    </div>
  );
}
