import css from "./ProductsSection.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import prod_1 from "../../images/products/prod_1.png";
import prod_2 from "../../images/products/prod_2.png";
import prod_3 from "../../images/products/prod_3.png";
import author_1 from "../../images/products/author_1.png";
import view_image from "../../images/products/view_image.png";
import { PiQuotesFill } from "react-icons/pi";
import ButtonUser from "../Button/Button";
import Carousel from "react-bootstrap/Carousel";

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
        <div className={css.productViews}>
          <div className={css.view}>
            <div className={css.viewAuthor}>
              <img
                src={view_image}
                alt="author appearence"
                width="59px"
                height="59px"
                className={css.viewAuthorPhoto}
              />
              <div className={css.viewAuthorData}>
                <p className={css.viewAuthorName}>Adele A. McNeill</p>
                <p className={css.viewAuthorNationality}>AMIRICAN</p>
              </div>
            </div>
            <p className={css.viewText}>
              <PiQuotesFill className={css.quotesStart} />
              Thanks a lot for the prompt service. Really appreciate. Excellence
              taste in Every Bite.Add a joy of best Taste. Foodie Moments.
              <PiQuotesFill className={css.quotesEnd} />
            </p>
            <div className={css.viewCarousel}>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={author_1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={author_1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={author_1}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <img
            className={css.viewImage}
            src={view_image}
            alt="product appearence"
            width="564px"
          />
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
