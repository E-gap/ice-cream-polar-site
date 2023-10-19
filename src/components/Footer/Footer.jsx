import css from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../../images/logo.png";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={css.footer}>
      <Container className="border">
        <Row className="border d-flex justify-content-between">
          <Col xs={5} className="border">
            <a href="/home">
              <img
                className={css.logo}
                src={logo}
                width="40px"
                alt="site logo"
              />
            </a>
            <p className={css.text}>
              We earned a reputation of being good at what we do. Let us take
              your online shop to new dimension in success!
            </p>
            <address>
              <ul className={css.addressList}>
                <li className={css.addressStreet}>
                  <AiOutlineAim className={css.aimIcon} /> Comilla, Bangladesh
                  3500
                </li>
                <li>
                  <a
                    className={css.addressEmail}
                    href="mailto:kawsarahmed0210@gmail.com"
                  >
                    kawsarahmed0210@gmail.com
                  </a>
                </li>
                <li className={css.phoneLi}>
                  <a className={css.addressPhone} href="tel:01647470457">
                    01647470457
                  </a>
                </li>
                <ul className={css.linksList}>
                  <li>
                    <a href="/">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsLinkedin />
                    </a>
                  </li>
                </ul>
              </ul>
            </address>
          </Col>
          <Col xs={5} className="border"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
