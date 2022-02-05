import "./Home.css";
import HomeEvent from "../../components/HomeEvent/HomeEvent";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Campaign from "../../components/Campaign";

export default function Home() {
  return (
    <div>
      <HomeSlider />
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
        <Campaign />
        <HomeEvent />
      </div>
    </div>
  );
}
