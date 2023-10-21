import css from "./ProductsSection.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ad_1 from "../../images/advantages-icons/ad_icon_1.png";
import ad_2 from "../../images/advantages-icons/ad_icon_2.png";
import ad_3 from "../../images/advantages-icons/ad_icon_3.png";
import ad_4 from "../../images/advantages-icons/ad_icon_4.png";

const ProductsSection = () => {
  return (
    <section className={css.products}>
      <Container className="border border-primary">Products</Container>
    </section>
  );
};

export default ProductsSection;
