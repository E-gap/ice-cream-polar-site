import css from "./MenSection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import man_1 from "../../images/man_1.jpg";
import man_2 from "../../images/man_2.jpg";
import man_3 from "../../images/man_3.jpg";
import man_4 from "../../images/man_4.jpg";

const MenSection = () => {
  return (
    <section className={css.menSection}>
      <Container className="d-flex flex-column align-items-center">
        <h1 className={css.sectionHeadline}>MEN’S FASHION</h1>
        <p className={css.sectionInfo}>
          Shop our new arrivals from established brands
        </p>
        <Row className="d-flex justify-content-between w-100">
          <Col xs="auto p-0">
            <Card style={{ width: "268px" }} className="border border-0">
              <Card.Img variant="top" src={man_1} className={css.image} />
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
            <Card style={{ width: "268px" }} className="border border-0">
              <Card.Img variant="top" src={man_2} className={css.image} />
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
            <Card style={{ width: "268px" }} className="border border-0">
              <Card.Img variant="top" src={man_3} className={css.image} />
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
            <Card style={{ width: "268px" }} className="border border-0">
              <Card.Img variant="top" src={man_4} className={css.image} />
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

export default MenSection;
