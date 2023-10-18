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
        <Row>
          <Col className="d-flex flex-column justify-content-between ">
            <Row>
              <Col>
                <Image src={ImageMiddle} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={ImageSmall1} />
              </Col>
              <Col>
                <Image src={ImageSmall2} />
              </Col>
            </Row>
          </Col>
          <Col className={css.lastCol}>
            <Image src={ImageLarge} />
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
