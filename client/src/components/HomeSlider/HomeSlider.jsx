import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  function carousel(slide) {
    return (
      <>
        <img
          className="object-cover d-block w-full h-96"
          src={slide.image.asset.url}
          alt=""
        />
        <Carousel.Caption className="flex flex-col justify-center gap-2 md:gap-5">
          <h1 className="md:text-3xl text-xl font-bold md:mb-2 mb-10">
            {slide.heading}
          </h1>
          <p>{slide.subHeading}</p>
        </Carousel.Caption>
      </>
    );
  }

  if (slides && slides.length > 0) {
    return (
      <Carousel className="carousel w-full h-max mx-auto object-none">
        {slides.map((slide, key) => (
          <Carousel.Item key={key}>
            {slide.link ? (
              <Link to={slide.link}>{carousel(slide)}</Link>
            ) : (
              carousel(slide)
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    );
  } else {
    return null;
  }
}
