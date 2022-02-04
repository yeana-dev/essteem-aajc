import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import SingleAboutUs from "./screens/SingleAboutUs/SingleAboutUs";
import News from "./screens/News/News";
import Events from "./screens/Events/Events";
import Donate from "./screens/Donate/Donate";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import ScrollToTop from "./ScrollToTop";

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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </ScrollToTop>
    </div>
  );
}

export default App;
