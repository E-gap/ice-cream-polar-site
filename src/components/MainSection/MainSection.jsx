import css from "./MainSection.module.css";
import Container from "react-bootstrap/Container";

import ButtonUser from "../Button/Button";

const MainSection = () => {
  return (
    <header className={css.mainSection}>
      <Container className="border border-primary">
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
        <ButtonUser text="Buy Now" variant="danger" view="common" />
      </Container>
    </header>
  );
};

export default MainSection;
