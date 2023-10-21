import css from "./ProductsSection.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ad_1 from "../../images/advantages-icons/ad_icon_1.png";
import ad_2 from "../../images/advantages-icons/ad_icon_2.png";
import ad_3 from "../../images/advantages-icons/ad_icon_3.png";
import ad_4 from "../../images/advantages-icons/ad_icon_4.png"; */

const ProductsSection = () => {
  return (
    <section className={css.products}>
      <Container className="border border-primary">
        <h1 className={css.sectionHeadline}>Our Product</h1>
        <Navbar
          className={`${css.navBar} pt-0 pb-0 d-flex justify-content-center`}
        >
          <Nav>
            <Nav.Link
              href="#ice_cream"
              className={`${css.productNavlink} linkProduct p-0 d-flex align-items-center`}
            >
              ICE CREAM
            </Nav.Link>
            <Nav.Link
              href="#cayenne_chocolate"
              className={`${css.productNavlink} linkProduct p-0 d-flex align-items-center`}
            >
              CAYENNE CHOCOLATE
            </Nav.Link>
            <Nav.Link
              href="#cake_batter"
              className={`${css.productNavlink} linkProduct p-0 d-flex align-items-center`}
            >
              CAKE BATTER
            </Nav.Link>
            <Nav.Link
              href="#candy_cane"
              className={`${css.productNavlink} linkProduct p-0 d-flex align-items-center`}
            >
              CANDY CANE
            </Nav.Link>
            <Nav.Link
              href="#platters"
              className={`${css.productNavlink} linkProduct p-0 d-flex align-items-center`}
            >
              PLATTERS
            </Nav.Link>
            <Nav.Link
              href="#dessert"
              className={`${css.productNavlink} linkProduct  p-0 d-flex align-items-center`}
            >
              DESSERT
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </section>
  );
};

export default ProductsSection;
