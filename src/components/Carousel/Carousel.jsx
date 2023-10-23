import css from "./Carousel.module.css";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { slides } from "../../assets/views";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

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

  return (
    <div className={css.view}>
      <div className={css.viewAuthor}>
        <img
          src={slides[slide].authorPhoto}
          alt="author appearence"
          width="59px"
          height="59px"
          className={css.viewAuthorPhoto}
        />
        <div>
          <p className={css.viewAuthorName}>{slides[slide].authorName}</p>
          <p className={css.viewAuthorNationality}>
            {slides[slide].authorNationality}
          </p>
        </div>
      </div>
      <p className={css.viewText}>
        <PiQuotesFill className={css.quotesStart} />
        {slides[slide].textView}
        <PiQuotesFill className={css.quotesEnd} />
      </p>
      <MdOutlineKeyboardArrowLeft
        className={`${css.button} ${css.buttonPrev}`}
        onClick={clickDown}
      />

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
      <MdOutlineKeyboardArrowRight
        onClick={clickUp}
        className={`${css.button} ${css.buttonNext}`}
      />
    </div>
  );
};

export default Carousel;
