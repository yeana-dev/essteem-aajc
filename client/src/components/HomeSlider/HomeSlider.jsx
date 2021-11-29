import Carousel from "react-bootstrap/Carousel";
import "./HomeSlider.css";

export default function HomeSlider({ slides }) {
  return (
    <Carousel className="w-full mx-auto">
      {slides.map((slide) => (
        <Carousel.Item>
          <a href={slide.link}>
            <img className="d-block" src={slide.image.asset.url} alt="" />
          </a>
          <Carousel.Caption>
            <h1 className="text-3xl font-bold mb-2">{slide.heading}</h1>
            <h2>{slide.subHeading}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
