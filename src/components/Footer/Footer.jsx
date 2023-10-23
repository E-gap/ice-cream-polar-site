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
    <footer className={css.footer}>
      <Container className="border border-primary">
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
        </Row>
        <div className={css.textPart}>
          <div className={css.part1}>
            <p className={css.part1_text}>
              Some food has looked so awful that it's looked like something that
              the dog's brought home.
            </p>
          </div>
          <div className={css.part2}>sdsd</div>
          <div className={css.part3}>sdsd</div>
          <div className={css.part4}>sdsd</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
