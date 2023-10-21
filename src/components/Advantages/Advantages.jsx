import css from "./Advantages.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ad_1 from "../../images/advantages-icons/ad_icon_1.png";
import ad_2 from "../../images/advantages-icons/ad_icon_2.png";
import ad_3 from "../../images/advantages-icons/ad_icon_3.png";
import ad_4 from "../../images/advantages-icons/ad_icon_4.png";

const Advantages = () => {
  return (
    <header className={css.advantages}>
      <Container className="border border-primary">
        <CardGroup className={css.cardGroup}>
          <Card className={`${css.card} border border-light-subtle rounded`}>
            <Card.Img variant="top" src={ad_1} className={`${css.icon_1}`} />
            <Card.Body>
              <Card.Title className={`${css.cardTitle} text-center`}>
                Free Shipping
              </Card.Title>
              <Card.Text className={`${css.cardText} text-center`}>
                Last Chance! Free shipping on all orders ends today.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={`${css.card} border border-light-subtle rounded`}>
            <Card.Img variant="top" src={ad_2} className={css.icon_2} />
            <Card.Body>
              <Card.Title className={`${css.cardTitle} text-center`}>
                Quick Packaging
              </Card.Title>
              <Card.Text className={`${css.cardText} text-center`}>
                Last Chance! Free shipping on all orders ends today.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={`${css.card} border border-light-subtle rounded`}>
            <Card.Img variant="top" src={ad_3} className={css.icon_3} />
            <Card.Body>
              <Card.Title className={`${css.cardTitle} text-center`}>
                100% Money Back
              </Card.Title>
              <Card.Text className={`${css.cardText} text-center`}>
                Last Chance! Free shipping on all orders ends today.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={`${css.card} border border-light-subtle rounded`}>
            <Card.Img variant="top" src={ad_4} className={css.icon_4} />
            <Card.Body>
              <Card.Title className={`${css.cardTitle} text-center`}>
                Fast Delivery
              </Card.Title>
              <Card.Text className={`${css.cardText} text-center`}>
                Last Chance! Free shipping on all orders ends today.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </header>
  );
};

export default Advantages;
