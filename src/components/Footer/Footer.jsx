import css from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../../images/logo.png";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
                width="79px"
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
            <InputGroup className={css.inputGroup}>
              <Form.Control
                className={css.input}
                type="text"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
              />
              <Button
                variant="white"
                className={`${css.buttonJoin} border border-start-0 pe-4`}
              >
                JOIN
              </Button>
            </InputGroup>
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
              <Col xs={3}>
                <a href="/shop">Shop</a>
              </Col>
              <Col xs={5}>
                <a href="/FAQ">FAQ</a>
              </Col>
              <Col xs={4}>
                <a href="/journal">Journal</a>
              </Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>
                <a href="/collection">Collection</a>
              </Col>
              <Col xs={5}>
                <a href="/policy">Privecy Policy</a>
              </Col>
              <Col xs={4}>
                <a href="/ourstory">Our Story</a>
              </Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>
                <a href="/outlet">Outlet</a>
              </Col>
              <Col xs={5}>
                <a href="/tearmsconditions">Tearms and conditions</a>
              </Col>
              <Col xs={4}>
                <a href="/contact">Contact</a>
              </Col>
            </Row>
            <Row className={css.footerMenuItem}>
              <Col xs={3}>
                <a href="/lookbook">Lookbook</a>
              </Col>
              <Col xs={5}>
                <a href="/exchanges">Return and Exchanges</a>
              </Col>
              <Col xs={4}>
                <a href="/location">Store Location</a>
              </Col>
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
