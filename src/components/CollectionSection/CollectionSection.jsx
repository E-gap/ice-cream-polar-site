import css from "./CollectionSection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CollectionSection = () => {
  return (
    <section className={css.collectionSection}>
      <Container className=" h-100" style={{ paddingTop: "426px" }}>
        <Row className="d-flex justify-content-start">
          <Col xs="auto">
            <p className={css.text}>OWN THE DAY</p>
            <p className={`${css.text} ${css.mainText}`}>TACHEN 19</p>
            <Button
              variant="dark"
              className={`${css.button} ${css.firstButton}`}
            >
              SHOP COLLECTION
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CollectionSection;
