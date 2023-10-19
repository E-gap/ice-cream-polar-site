import css from "./MainSection.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainSection = () => {
  return (
    <section className={css.mainSection}>
      <Container className="h-100" style={{ paddingTop: "426px" }}>
        <Row className="d-flex justify-content-end">
          <Col xs="auto">
            <p className={css.text}>NEW TREND</p>
            <p className={`${css.text} ${css.mainText}`}>COLLUSION</p>
            <p className={`${css.text} ${css.lastText}`}>
              An exclusive selection of this season's trends.
            </p>
            <Button
              variant="dark"
              className={`${css.button} ${css.firstButton}`}
            >
              DISCOVER
            </Button>
            <Button variant="dark" className={css.button}>
              SHOP NOW
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainSection;
