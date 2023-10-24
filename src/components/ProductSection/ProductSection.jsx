import css from "./ProductSection.module.css";
import Container from "react-bootstrap/Container";
import ButtonUser from "../Button/Button";
import ProductImage from "../../images/product-icons/prod_1.png";
import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";

const ProductSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <section id="product" className={css.productSection}>
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
          <ButtonUser
            text="See Details"
            variant="danger"
            view="common"
            handleClick={handleShow}
          />
        </div>
        <div className={css.relative}>
          <img
            className={css.image}
            src={ProductImage}
            alt="ice cream appearance"
          />
        </div>
        <ModalDetails isModalOpen={isModalOpen} handleClose={handleClose} />
      </Container>
    </section>
  );
};

export default ProductSection;
