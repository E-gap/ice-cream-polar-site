import css from "./PricingSection.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import price_1 from "../../images/pricing/price_1.png";
import price_2 from "../../images/pricing/price_2.png";
import price_3 from "../../images/pricing/price_3.png";
import view_image from "../../images/pricing/view_image.png";
import ButtonUser from "../Button/Button";
import Carousel from "../Carousel/Carousel";

const PricingSection = () => {
  return (
    <section id="pricing" className={css.pricingSection}>
      <Container>
        <h1 className={css.sectionHeadline}>Our Product</h1>
        <Navbar
          className={`${css.navBar} pt-0 pb-0 d-flex justify-content-center`}
        >
          <Nav>
            <Nav.Link
              href="#ice_cream"
              className={`${css.pricingNavlink} linkPricing p-0 d-flex align-items-center`}
            >
              ICE CREAM
            </Nav.Link>
            <Nav.Link
              href="#cayenne_chocolate"
              className={`${css.pricingNavlink} linkPricing p-0 d-flex align-items-center`}
            >
              CAYENNE CHOCOLATE
            </Nav.Link>
            <Nav.Link
              href="#cake_batter"
              className={`${css.pricingNavlink} linkPricing p-0 d-flex align-items-center`}
            >
              CAKE BATTER
            </Nav.Link>
            <Nav.Link
              href="#candy_cane"
              className={`${css.pricingNavlink} linkPricing p-0 d-flex align-items-center`}
            >
              CANDY CANE
            </Nav.Link>
            <Nav.Link
              href="#platters"
              className={`${css.pricingNavlink} linkPricing p-0 d-flex align-items-center`}
            >
              PLATTERS
            </Nav.Link>
            <Nav.Link
              href="#dessert"
              className={`${css.pricingNavlink} linkPricing  p-0 d-flex align-items-center`}
            >
              DESSERT
            </Nav.Link>
          </Nav>
        </Navbar>
        <ul className={css.pricingList}>
          <li className={css.pricingItem}>
            <img
              className={css.pricingImage}
              src={price_1}
              alt="pricing appearence"
              width="580px"
            />
            <div className={css.pricingDescription}>
              <h2 className={css.pricingName}>Brown bread</h2>
              <p className={css.pricingText}>
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                <br />
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a <br />
                pioneer in the healthy fast food scene.
              </p>
              <p className={css.pricingPrice}>
                $19.55 <span className={css.formerPricingPrice}>$22.55</span>
              </p>
              <ButtonUser text="Buy Now" variant="danger" view="common" />
            </div>
          </li>
          <li className={`${css.pricingItem} ${css.pricingItemEven}`}>
            <img
              className={css.pricingImage}
              src={price_2}
              alt="pricing appearence"
              width="580px"
            />
            <div
              className={`${css.pricingDescription} ${css.pricingDescriptionEven}`}
            >
              <h2 className={css.pricingName}>Cayenne chocolate</h2>
              <p className={`${css.pricingText} ${css.pricingTextEven}`}>
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                <br />
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a <br />
                pioneer in the healthy fast food scene.
              </p>
              <p className={css.pricingPrice}>
                $19.55 <span className={css.formerPricingPrice}>$22.55</span>
              </p>
              <ButtonUser text="Buy Now" variant="danger" view="common" />
            </div>
          </li>
          <li className={css.pricingItem}>
            <img
              className={css.pricingImage}
              src={price_3}
              alt="pricing appearence"
              width="580px"
            />
            <div className={css.pricingDescription}>
              <h2 className={css.pricingName}>Sweet corn</h2>
              <p className={css.pricingText}>
                Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                <br />
                Pain is a pioneer in the healthy fast food scene.Bon Au Pain is
                a <br />
                pioneer in the healthy fast food scene.
              </p>
              <p className={css.pricingPrice}>
                $19.55 <span className={css.formerPricingPrice}>$22.55</span>
              </p>
              <ButtonUser text="Buy Now" variant="danger" view="common" />
            </div>
          </li>
        </ul>
        <section id="testimonials" className={css.testimonials}>
          <Carousel />
          <img
            className={css.viewImage}
            src={view_image}
            alt="testimonials appearence"
            width="564px"
          />
        </section>
      </Container>
    </section>
  );
};

export default PricingSection;
