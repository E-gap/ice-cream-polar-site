import css from "./FotosSection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImageMiddle from "../../images/Image-middle.jpg";
import ImageLarge from "../../images/Image-large.jpg";
import ImageSmall1 from "../../images/Image-small-1.jpg";
import ImageSmall2 from "../../images/Image-small-2.jpg";
import Button from "react-bootstrap/Button";

const FotosSection = () => {
  return (
    <section className={css.fotosSection}>
      <Container className="d-flex justify-content-center">
        <Row className="d-flex flex-row justify-content-around w-100 p-0">
          <Col
            xs="auto"
            className="d-flex flex-column justify-content-between p-0"
          >
            <Row>
              <Col xs="auto">
                <Image src={ImageMiddle} style={{ width: "551px" }} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={ImageSmall1} style={{ width: "263px" }} />
              </Col>
              <Col xs="auto">
                <Image src={ImageSmall2} style={{ width: "263px" }} />
              </Col>
            </Row>
          </Col>
          <Col className={`${css.lastCol} p-0`} xs="auto">
            <Image src={ImageLarge} style={{ width: "551px" }} />
            <Button variant="light" className={css.button}>
              CATEGORY NAME
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FotosSection;
