import css from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import logo from "../../images/logo.png";
import facebook from "../../images/footer/facebook.svg";
import twitter from "../../images/footer/twitter.svg";
import instagram from "../../images/footer/instagram.svg";
import linkedin from "../../images/footer/linkedin.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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
            <p className={css.listLinksName}>Follow us</p>
            <ul className={css.linkSocialList}>
              <li className={css.socialLinkItem}>
                <a href="/">
                  <img src={facebook} alt="facebook icon" />
                </a>
              </li>

              <li className={css.socialLinkItem}>
                <a href="/">
                  <img src={twitter} alt="twitter icon" />
                </a>
              </li>
              <li className={css.socialLinkItem}>
                <a href="/">
                  <img src={instagram} alt="instagram icon" />
                </a>
              </li>
              <li className={css.socialLinkItem}>
                <a href="/">
                  <img src={linkedin} alt="linkedin icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className={css.part2}>
            <Nav className={css.linkList}>
              <Nav.Link
                href="#home"
                className={`${css.navlink} footer link p-0`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#product"
                className={`${css.navlink} footer link p-0`}
              >
                Product
              </Nav.Link>
              <Nav.Link
                href="#blog"
                className={`${css.navlink} footer link p-0`}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className={`${css.navlink} footer link p-0`}
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                href="#testimonials"
                className={`${css.navlink} footer link p-0`}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="#contact_us"
                className={`${css.navlink} footer link p-0`}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
          <div className={css.part3}>
            <Nav className={css.linkList}>
              <Nav.Link
                href="/delivery_information"
                className={`${css.navlink} link p-0`}
              >
                Delivery Information
              </Nav.Link>
              <Nav.Link
                href="/privacy_policy"
                className={`${css.navlink}  link p-0`}
              >
                Privacy Policy
              </Nav.Link>
              <Nav.Link
                href="/terms_condition"
                className={`${css.navlink}  link p-0`}
              >
                Terms & Condition
              </Nav.Link>
              <Nav.Link
                href="/search_terms"
                className={`${css.navlink}  link p-0`}
              >
                Search Terms
              </Nav.Link>
              <Nav.Link
                href="/order_return"
                className={`${css.navlink}  link p-0`}
              >
                Order & Return
              </Nav.Link>
            </Nav>
          </div>
          <div className={css.part4}>sdsd</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
