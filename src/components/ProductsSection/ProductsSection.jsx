import css from "./ProductsSection.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import prod_1 from "../../images/products/prod_1.png";
import prod_2 from "../../images/products/prod_2.png";
import prod_3 from "../../images/products/prod_3.png";

import ButtonUser from "../Button/Button";

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
        <ul className={css.productList}>
          <li className={css.productItem}>
            <img
              className={css.productImage}
              src={prod_1}
              alt="product appearence"
              width="580px"
            />
            <div className={css.productDescription}>
              <h2 className={css.productName}>Brown bread</h2>
              <p className={css.productText}>
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                <br />
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a <br />
                pioneer in the healthy fast food scene.
              </p>
              <p className={css.productPrice}>
                $19.55 <span className={css.formerProductPrice}>$22.55</span>
              </p>
              <ButtonUser text="Buy Now" variant="danger" view="common" />
            </div>
          </li>
          <li className={`${css.productItem} ${css.productItemEven}`}>
            <img
              className={css.productImage}
              src={prod_2}
              alt="product appearence"
              width="580px"
            />
            <div
              className={`${css.productDescription} ${css.productDescriptionEven}`}
            >
              <h2 className={css.productName}>Cayenne chocolate</h2>
              <p className={`${css.productText} ${css.productTextEven}`}>
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                <br />
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a <br />
                pioneer in the healthy fast food scene.
              </p>
              <p className={css.productPrice}>
                $19.55 <span className={css.formerProductPrice}>$22.55</span>
              </p>
              <ButtonUser text="Buy Now" variant="danger" view="common" />
            </div>
          </li>
          <li className={css.productItem}>
            <img
              className={css.productImage}
              src={prod_3}
              alt="product appearence"
              width="580px"
            />
            <div className={css.productDescription}>
              <h2 className={css.productName}>Sweet corn</h2>
              <p className={css.productText}>
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                <br />
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a <br />
                pioneer in the healthy fast food scene.
              </p>
              <p className={css.productPrice}>
                $19.55 <span className={css.formerProductPrice}>$22.55</span>
              </p>
              <ButtonUser text="Buy Now" variant="danger" view="common" />
            </div>
          </li>
        </ul>
        <p>Next</p>
      </Container>
    </section>
  );
};

export default ProductsSection;
