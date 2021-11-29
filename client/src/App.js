import "./App.css";
import { Routes, Route } from "react-router-dom";

import ImageSilder from "./components/Carousel/ImageSilder";
import { SliderData } from "./components/Carousel/SilderData";
import HomeIcons from "./components/HomeIcons";

// import image1 from "../src/assets/image1.jpeg"
// import StandAgainstHatred from '../src/assets/StandAgainstHatred.png';
// import hollaback from '../src/assets/hollaback 1.png'
// import vote from '../src/assets/unsplash_ZqsY740eAOo.png';
// import supportFamilies from '../src/assets/VOFlogo-colored 1.png';


import Layout from "./Layout/Layout";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import SingleAboutUs from "./screens/SingleAboutUs/SingleAboutUs";
import News from "./screens/News/News";
import Events from "./screens/Events/Events";
import Donate from "./screens/Donate/Donate";
import ScrollToTop from "./ScrollToTop";

const homeIcons = [
  {
    location: "Washington D.C.",
    name: "Asian Americans Advancing Justice |AAJC",
    image:
      "https://www.advancingjustice-aajc.org/themes/sunset/img/aajc_logo.svg",
    statement:
      "Fighting for civil rights and empowering Asian Americans to create a more just America for all.",
    link: "https://www.advancingjustice-aajc.org/",
  },
  {
    location: "San Francisco",
    name: "Asian Americans Advancing Justice |Asian Law Caucus",
    image:
      "https://www.advancingjustice-alc.org/wp-content/uploads/2016/04/logo.png",
    statement: `
The mission of Asian Americans Advancing Justice – Asian Law Caucus is to promote, advance, and represent the legal and civil rights of Asian Pacific Islander communities.`,
    link: "https://www.advancingjustice-alc.org/",
  },
  {
    location: "Chicago",
    name: "Asian Americans Advancing Justice | Chicago",
    image:
      "https://www.advancingjustice-chicago.org/wp-content/themes/advancingjustice/library/images/Logo.svg",
    statement:
      "Asian Americans Advancing Justice | Chicago builds power through collective advocacy and organizing to achieve racial equity.",
    link: "https://www.advancingjustice-chicago.org/",
  },
  {
    location: "Los Angeles",
    name: "Asian Americans Advancing Justice | Los Angeles",
    image:
      "https://i0.wp.com/advancingjustice-la.org/wp-content/uploads/2021/08/Advancing-Justice-LA-Transparent-Logo.png?w=630&ssl=1",
    statement: `Asian Americans Advancing Justice – Los Angeles (Advancing Justice – LA) is the nation’s largest legal and civil rights organization for Asian Americans, Native Hawaiians, and Pacific Islanders (AANHPI).

Founded in 1983 as the Asian Pacific American Legal Center, Advancing Justice – LA serves more than 15,000 individuals and organizations every year. Through direct services, impact litigation, policy advocacy, leadership development, and capacity building, Advancing Justice – LA focuses on the most vulnerable members of Asian American and AANHPI communities while also building a strong voice for civil rights and social justice.

Advancing Justice – LA is based in downtown Los Angeles, with satellite offices in Orange County and Sacramento.`,
    link: "https://advancingjustice-la.org/",
  },
  {
    location: "Atlanta",
    name: "Asian Americans Advancing Justice | Atlanta",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f0cc12a064e9716d52e6052/1602519259968-YXZ0JYDYMQ3YW57RS5MR/AJ_ATL_logo_white.png?format=1500w",
    statement:
      "Protecting the civil and human rights of Asian Americans in Georgia and the Southeast.",
    link: "https://www.advancingjustice-atlanta.org/",
  },
];

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/atlanta" element={<SingleAboutUs />} />
            <Route path="/about-us/chicago" element={<SingleAboutUs />} />
            <Route path="/about-us/los-angeles" element={<SingleAboutUs />} />
            <Route path="/about-us/san-francisco" element={<SingleAboutUs />} />
            <Route path="/about-us/washington-dc" element={<SingleAboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </Layout>
      </ScrollToTop>
    </div>
  );
}

export default App;
