import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
import "./HomeSlider.css";

export default function HomeSlider() {
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

  if (slides && slides.length > 0) {
    return (
      <Carousel className="carousel w-full h-max mx-auto object-none">
        {slides.map((slide) => (
          <Carousel.Item>
            <a href={slide.link} target="_blank" rel="noreferrer">
              <img
                className="d-block w-full h-96"
                src={slide.image.asset.url}
                alt=""
              />
            </a>
            <Carousel.Caption className="flex flex-col justify-center gap-2 md:gap-5">
              <h1 className="md:text-3xl text-xl font-bold md:mb-2 mb-10">
                {slide.heading}
              </h1>
              <h2>{slide.subHeading}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  } else {
    return null;
  }
}
