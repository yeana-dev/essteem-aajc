


import "../../../src/App.css";
import { Routes, Route } from "react-router-dom";

import ImageSilder from "../../components/Carousel/ImageSilder";
import { SliderData } from "../../components/Carousel/SilderData";
// import HomeIcons from "../../components/HomeIcons";

import image1 from "../Home/image1.jpeg"
import StandAgainstHatred from '../Home/StandAgainstHatred.png';
import hollaback from '../Home/hollaback 1.png'
import vote from '../Home/unsplash_ZqsY740eAOo.png';
import supportFamilies from '../Home/VOFlogo-colored 1.png';

import Layout from "../../Layout/Layout";
import News from "../../screens/News/News";
import Events from "../../screens/Events/Events";
import Donate from "../../screens/Donate/Donate";

// const homeIcons = [
//   {
//     location: "Washington D.C.",
//     name: "Asian Americans Advancing Justice |AAJC",
//     image:
//       "https://www.advancingjustice-aajc.org/themes/sunset/img/aajc_logo.svg",
//     statement:
//       "Fighting for civil rights and empowering Asian Americans to create a more just America for all.",
//     link: "https://www.advancingjustice-aajc.org/",
//   },
//   {
//     location: "San Francisco",
//     name: "Asian Americans Advancing Justice |Asian Law Caucus",
//     image:
//       "https://www.advancingjustice-alc.org/wp-content/uploads/2016/04/logo.png",
//     statement: `
// The mission of Asian Americans Advancing Justice – Asian Law Caucus is to promote, advance, and represent the legal and civil rights of Asian Pacific Islander communities.`,
//     link: "https://www.advancingjustice-alc.org/",
//   },
//   {
//     location: "Chicago",
//     name: "Asian Americans Advancing Justice | Chicago",
//     image:
//       "https://www.advancingjustice-chicago.org/wp-content/themes/advancingjustice/library/images/Logo.svg",
//     statement:
//       "Asian Americans Advancing Justice | Chicago builds power through collective advocacy and organizing to achieve racial equity.",
//     link: "https://www.advancingjustice-chicago.org/",
//   },
//   {
//     location: "Los Angeles",
//     name: "Asian Americans Advancing Justice | Los Angeles",
//     image:
//       "https://i0.wp.com/advancingjustice-la.org/wp-content/uploads/2021/08/Advancing-Justice-LA-Transparent-Logo.png?w=630&ssl=1",
//     statement: `Asian Americans Advancing Justice – Los Angeles (Advancing Justice – LA) is the nation’s largest legal and civil rights organization for Asian Americans, Native Hawaiians, and Pacific Islanders (AANHPI).

// Founded in 1983 as the Asian Pacific American Legal Center, Advancing Justice – LA serves more than 15,000 individuals and organizations every year. Through direct services, impact litigation, policy advocacy, leadership development, and capacity building, Advancing Justice – LA focuses on the most vulnerable members of Asian American and AANHPI communities while also building a strong voice for civil rights and social justice.

// Advancing Justice – LA is based in downtown Los Angeles, with satellite offices in Orange County and Sacramento.`,
//     link: "https://advancingjustice-la.org/",
//   },
//   {
//     location: "Atlanta",
//     name: "Asian Americans Advancing Justice | Atlanta",
//     image:
//       "https://images.squarespace-cdn.com/content/v1/5f0cc12a064e9716d52e6052/1602519259968-YXZ0JYDYMQ3YW57RS5MR/AJ_ATL_logo_white.png?format=1500w",
//     statement:
//       "Protecting the civil and human rights of Asian Americans in Georgia and the Southeast.",
//     link: "https://www.advancingjustice-atlanta.org/",
//   },
// ];

function App() {
  return (
		<div className='App'>
			<Layout>
				{/* <ImageSilder slides={SliderData} /> */}
				<header>
					<h1 className='border-2 border-dashed border-black'>title</h1>
				</header>
				{/* <HomeIcons homeIcons={homeIcons} /> */}
				<Routes>

					<Route path='/news' element={<News />} />
					<Route path='/events' element={<Events />} />
					<Route path='/donate' element={<Donate />} />
				</Routes>
			</Layout>

			{/* <ImageSilder slides={SliderData} /> */}
			<header className = 'm'>
				<h3 className="missiontitle">Our Mission</h3>
				<h2 className = "mission">
					To promote a fair and equitable society for all by working for civil
					and human rights that empower Asian Americans and Pacific Islanders
					and other underserved communities
				</h2>
			</header>
			{/* <HomeIcons homeIcons={homeIcons} /> */}
			<div className='HomeStats'>
				<div className='stat1'>
					<h1>$543,750 </h1>
					<h3>
						saved in citizenship fees for low-income immigrants, through
						successful fee waivers
					</h3>
				</div>

				<div className='stat2'></div>
				<h1>7,596 </h1>
				<h3>
					calls resolved through 8 Asian Language Legal Intake Project helplines
					in 12 languages/dialects
				</h3>

				<div className='stat3'></div>
				<h1>14,910 </h1>
				<h3>
					individuals enrolled in state and local health coverage and safety net
					programs{' '}
				</h3>
			</div>
			<button className='learnMore'>LEARN MORE</button>
			<div className='elderlyOldMan'>
				<img className = "elderlyOldManImg" src={image1} alt='' />

        <div className= "coverStory">
				<h3 className= "title">Elderly Korean Man Targeted by Hate </h3>
				<h5 className='date'>September 29, 2021</h5>
				<h5 className='source'>Source: Stand against Hatred</h5>
				<p className="text">
					Elderly Korean man was driving in his van near the corner of E.
					Washington and S. Central Ave in Los Angeles. A woman approached the
					van and started beating on the windows, yelling at him to go back to
					Asia and other negative comments about Asians. She yanked the
					windshield wiper of the car until it broke and damaged the car. The
					elder waited until she moved back to drive away and avoid further
					damage to the car. He was not sure how to deal with the situation with
					his limited English speaking skills.
				</p>
				<button>View More</button>
        </div>
			</div>

           <h1 className='affliationWideCampaignsH'>Affiliation-Wide Campaigns</h1>
			<div className='affliationWideCampaigns'>
   
				<div className='item one'>
					<img className ='imageCol' src={StandAgainstHatred} alt='' />
					<p className='message'>
						We encourage community members who have experienced anti-Asian hate
						to share their experiences and report to our website
						StandAgainstHatred.org. We document hate crimes, harassment, and
						discrimination experienced by our community.
					</p>
          <div className = "refs"><a href='https://www.standagainsthatred.org/'>standagainsthatred.org</a></div>
					
				</div>

				<div className='item two'>
					<img className ='imageCol' src={hollaback} alt='' />
					<p className='message'>
						We believe every person can safely take action against incidents of
						anti-Asian hate. Register for free training with any of our
						affiliates below.
					</p>
              <div className = "refs">
                    <a href='url'>Atlanta</a>
                    <a href='url'>Chicago</a>
                    <a href='url'>Los Angeles</a>
                    <a href='url'>ALC (San Francisco)</a>
                    <a href='url'>AAJC (Washington D.C.)</a>


              </div>
			
          
				</div>

				<div className='item three'>
					<img className ='imageCol' src={supportFamilies} alt='' />
					<p className='message'>
						We exist to protect, preserve, and strengthen the family immigration
						system and promote an immigration system that is informed by love,
						empathy, and justice.
					</p>

<div className = "refs"><a href='https://www.valueourfamilies.org/'>valueourfamilies.org</a></div>
					
				</div>
				<div className='item four'>
					<img className ='imageCol'src={vote} alt='' />
					<p className='message'>
						The Voting Rights Project has created several tools for
						community-based organizations to use to educate their community
						members about the voting process.
					</p>

    <div className = "refs">
                    <a href='url'>Atlanta</a>
                    <a href='url'>Chicago</a>
                    <a href='url'>Los Angeles</a>
                    <a href='url'>ALC (San Francisco)</a>
                    <a href='url'>AAJC (Washington D.C.)</a>


              </div>
					
				</div>
			</div>
		</div>
	);
}

export default App;


// export default function Home() {
//   return <div>I am home</div>;
// }