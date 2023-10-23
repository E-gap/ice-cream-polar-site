import css from "./OrderSection.module.css";
import Container from "react-bootstrap/Container";
import googlePlay from "../../images/order/googleplay.jpg";
import appStore from "../../images/order/appstore.jpg";

const OrderSection = () => {
  return (
    <section className={css.orderSection}>
      <Container className="border border-primary">
        <div className={css.sectionContent}>
          <div className={css.cardOrder}></div>
          <div className={css.textPart}>
            <h1 className={css.sectionHeadline}>
              Simple Way To Order Your Food
            </h1>
            <p className={css.sectionText}>
              Some food has looked so awful that it's looked like something that
              the <br /> dog's brought home, yet after one mouthful I've been
              left eating my <br />
              thoughts.
            </p>
            <ul className={css.optionList}>
              <li className={`${css.optionItem} ${css.optionItemSelect}`}>
                Select Your Food
              </li>
              <li className={`${css.optionItem} ${css.optionItemAdd}`}>
                Add To Cart
              </li>
              <li className={`${css.optionItem} ${css.optionItemOrder}`}>
                Order Your Food
              </li>
            </ul>
            <button className={css.google}>
              <img src={googlePlay} width="200px" alt="google button" />
            </button>
            <button className={css.appstore}>
              <img src={appStore} width="200px" alt="app store button" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OrderSection;
