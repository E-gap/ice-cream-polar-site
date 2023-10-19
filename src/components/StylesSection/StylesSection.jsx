import css from "./StylesSection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles_img_1 from "../../images/styles_img_1.jpg";
import styles_img_2 from "../../images/styles_img_2.jpg";
import styles_img_3 from "../../images/styles_img_3.jpg";

import Image from "react-bootstrap/Image";

const StylesSection = () => {
  return (
    <section className={css.stylesSection}>
      <Container className="d-flex flex-column align-items-center">
        <h1 className={css.sectionHeadline}>AVONE STYLES</h1>
        <p className={css.sectionInfo}>Choose Your Favorite Color</p>
        <Row className="d-flex justify-content-between w-100">
          <Col
            xs="auto"
            className="d-flex flex-column justify-content-end ps-0 "
          >
            <Image src={styles_img_1} className={css.image_1} />
          </Col>
          <Col
            xs="auto"
            className={`${css.colRelative} pe-0 d-flex flex-column align-items-end`}
          >
            <Image src={styles_img_2} className={css.image_2} />
            <Image
              src={styles_img_3}
              style={{ width: "227px" }}
              className={css.image_3}
            />
            <a href="/wdress" className={css.linkDress}>
              SHOW WOMEN’S DRESS
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StylesSection;
