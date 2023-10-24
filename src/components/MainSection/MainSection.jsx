import css from "./MainSection.module.css";
import Container from "react-bootstrap/Container";
import ButtonUser from "../Button/Button";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";
import ModalOrder from "../ModalOrder/ModalOrder";

const MainSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <section id="home" className={css.mainSection}>
      <AiOutlineArrowUp className={css.buttonUp} onClick={scrollUp} />
      <Container>
        <p className={css.text_1}>Sweet fun, full of milk.</p>
        <h1 className={css.sectionHeadline}>
          Feel inside cold with <br />
          our delicious{" "}
          <span className={`${css.sectionHeadline} ${css.pinkColor}`}>
            ice-cream.
          </span>
        </h1>
        <p className={css.text_2}>
          Some food has looked so awful that it's looked like something that{" "}
          <br />
          the dog's brought home, yet after one mouthful I've been left <br />
          eating my thoughts, my words.
        </p>
        <ButtonUser
          text="Buy Now"
          variant="danger"
          view="common"
          handleClick={handleShow}
        />
        <ModalOrder isModalOpen={isModalOpen} handleClose={handleClose} />
      </Container>
    </section>
  );
};

export default MainSection;
