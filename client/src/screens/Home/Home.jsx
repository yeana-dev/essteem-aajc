import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { useState, useEffect } from "react";
import sanityClient from "../../Client";

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
  return <div>{slides && <HomeSlider slides={slides} />}</div>;
}
