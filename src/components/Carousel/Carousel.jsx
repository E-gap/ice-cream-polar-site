import css from "./Carousel.module.css";
import { useState } from "react";
import ButtonUser from "../Button/Button";
import author_1 from "../../images/slider/author_1.png";
import author_2 from "../../images/slider/author_2.png";
import author_3 from "../../images/slider/author_3.png";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      textView: "text 1",
      authorPhoto: author_1,
      authorName: "Larisa",
      authorNationality: "German",
    },
    {
      textView: "text 2",
      authorPhoto: author_2,
      authorName: "Igor",
      authorNationality: "Italy",
    },
    {
      textView: "text 3",
      authorPhoto: author_3,
      authorName: "Klara",
      authorNationality: "France",
    },
  ];

  const clickDown = () => {
    if (slide === 0) {
      setSlide(slides.length - 1);
    } else setSlide(slide - 1);
  };

  const clickUp = () => {
    if (slide + 1 === slides.length) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  const numberPrevSlide = (slide) => {
    if (slide === 0) {
      return slides.length - 1;
    } else return slide - 1;
  };

  const numberNextSlide = (slide) => {
    if (slide + 1 === slides.length) {
      return 0;
    } else return slide + 1;
  };

  console.log("render");

  return (
    <div>
      <ButtonUser text="down" handleClick={clickDown} />
      <p className={css.viewText}>{slides[slide].textView}</p>
      {slides.length > 2 && (
        <img
          className={css.authorPrev}
          src={slides[numberPrevSlide(slide)].authorPhoto}
          alt="author appearance"
        />
      )}
      <img
        className={css.authorActual}
        src={slides[slide].authorPhoto}
        alt="author appearance"
      />
      {slides.length > 1 && (
        <img
          className={css.authorNext}
          src={slides[numberNextSlide(slide)].authorPhoto}
          alt="author appearance"
        />
      )}
      <p className={css.viewAuthorName}>{slides[slide].authorName}</p>
      <p className={css.viewAuthorNationality}>
        {slides[slide].authorNationality}
      </p>
      <ButtonUser text="up" handleClick={clickUp} />
    </div>
  );
};

export default Carousel;
