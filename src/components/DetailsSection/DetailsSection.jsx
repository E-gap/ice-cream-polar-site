import css from "./DetailsSection.module.css";
import Container from "react-bootstrap/Container";
import ButtonUser from "../Button/Button";
import DetailsImage from "../../images/details-icons/det_1.png";

const DetailsSection = () => {
  return (
    <section className={css.detailsSection}>
      <Container className={`${css.container}`}>
        <div>
          <h1 className={css.sectionHeadline}>
            Brown Sugar <br /> Oatmea
          </h1>
          <p className={css.text}>
            Together with McDonald’s, Burger King has grown to become <br />
            synonymous with burgers in the US.Together with McDonald’s, <br />
            Burger King has grown to become synonymous.
          </p>
          <ButtonUser text="See Details" variant="danger" view="common" />
        </div>
        <div className={css.relative}>
          <img
            className={css.image}
            src={DetailsImage}
            alt="ice cream appearance"
          />
        </div>
      </Container>
    </section>
  );
};

export default DetailsSection;
