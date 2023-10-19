import css from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../../images/logo.png";
import Form from "react-bootstrap/Form";

import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineAim } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={css.footer}>
      <Container>
        <Row className={`${css.rowLogo}  d-flex justify-content-between`}>
          <Col xs={5}>
            <a href="/home">
              <img
                className={css.logo}
                src={logo}
                width="40px"
                alt="site logo"
              />
            </a>
          </Col>
          <Col xs={5}>
            <p className={css.mainText}>RECIVE EMAIL UPDATES</p>
          </Col>
        </Row>
        <Row className={`${css.rowInput}  d-flex justify-content-between`}>
          <Col xs={5}>
            <p className={css.text}>
              We earned a reputation of being good at what we do. Let us take
              your online shop to new dimension in success!
            </p>
          </Col>
          <Col xs={5}>
            <Form.Control
              className={css.input}
              type="text"
              placeholder="Your Email Address"
            />
          </Col>
        </Row>
        <Row className={`${css.rowAddress}  d-flex justify-content-between`}>
          <Col xs={5}>
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
          <Col xs={5} className={`${css.footerMenu}`}>
            <Row className={css.footerMenuHead}>
              <Col xs={3}>shop</Col>
              <Col xs={5}>help</Col>
              <Col>about</Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>Shop</Col>
              <Col xs={5}>FAQ</Col>
              <Col xs={4}>Journal</Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>Collection</Col>
              <Col xs={5}>Privecy Policy</Col>
              <Col xs={4}>Our Story</Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>Outlet</Col>
              <Col xs={5}>Tearms and conditions</Col>
              <Col xs={4}>Contact</Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>Lookbook</Col>
              <Col xs={5}>Return and Exchanges</Col>
              <Col xs={4}>Store Location</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className={css.rights}>
        <Container>
          <p>Copyright © 2020 . Your company name All rights reserved</p>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
