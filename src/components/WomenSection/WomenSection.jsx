import css from "./WomenSection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImageMiddle from "../../images/Image-middle.jpg";
import ImageLarge from "../../images/Image-large.jpg";
import ImageSmall1 from "../../images/Image-small-1.jpg";
import ImageSmall2 from "../../images/Image-small-2.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import woman_1 from "../../images/woman_1.jpg";
import woman_2 from "../../images/woman_2.jpg";
import woman_3 from "../../images/woman_3.jpg";
import woman_4 from "../../images/woman_4.jpg";

const WomanSection = () => {
  return (
    <section className={css.womenSection}>
      <Container className="d-flex flex-column align-items-center border">
        <h1 className={css.sectionHeadline}>WOMEN’S FASHION</h1>
        <p className={css.sectionInfo}>
          Shop our new arrivals from established brands
        </p>
        <Row className="d-flex justify-content-between border w-100">
          <Col xs="auto p-0">
            <Card style={{ width: "268px" }}>
              <Card.Img variant="top" src={woman_1} className={css.image} />
              <Card.Body className="p-0">
                <Card.Title className={css.cardTitle}>IGURE</Card.Title>
                <Card.Text className={css.cardText}>
                  GREEN MUSCLE FIT POLO SHIRT
                </Card.Text>
                <Card.Text className={css.cardPrice}>
                  <span className={css.cardFormerPrice}>$229.00</span>
                  <span className={css.cardActualPrice}>$129.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto p-0">
            <Card style={{ width: "268px" }}>
              <Card.Img variant="top" src={woman_2} className={css.image} />
              <Card.Body className="p-0">
                <Card.Title className={css.cardTitle}>IGURE</Card.Title>
                <Card.Text className={css.cardText}>
                  GREEN MUSCLE FIT POLO SHIRT
                </Card.Text>
                <Card.Text className={css.cardPrice}>
                  <span className={css.cardFormerPrice}>$229.00</span>
                  <span className={css.cardActualPrice}>$129.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto p-0">
            <Card style={{ width: "268px" }}>
              <Card.Img variant="top" src={woman_3} className={css.image} />
              <Card.Body className="p-0">
                <Card.Title className={css.cardTitle}>IGURE</Card.Title>
                <Card.Text className={css.cardText}>
                  GREEN MUSCLE FIT POLO SHIRT
                </Card.Text>
                <Card.Text className={css.cardPrice}>
                  <span className={css.cardFormerPrice}>$229.00</span>
                  <span className={css.cardActualPrice}>$129.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="auto p-0">
            <Card style={{ width: "268px" }}>
              <Card.Img variant="top" src={woman_4} className={css.image} />
              <Card.Body className="p-0">
                <Card.Title className={css.cardTitle}>IGURE</Card.Title>
                <Card.Text className={css.cardText}>
                  GREEN MUSCLE FIT POLO SHIRT
                </Card.Text>
                <Card.Text className={css.cardPrice}>
                  <span className={css.cardFormerPrice}>$229.00</span>
                  <span className={css.cardActualPrice}>$129.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WomanSection;
