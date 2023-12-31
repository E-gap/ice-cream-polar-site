import css from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../images/logo.png";
import ButtonUser from "../Button/Button";
import { useState } from "react";
import ModalOrder from "../ModalOrder/ModalOrder";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <header className={css.header}>
      <Navbar className="pt-0 pb-0">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="79px" alt="site logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className={`${css.navlink} link`}>
              Home
            </Nav.Link>
            <Nav.Link href="#product" className={`${css.navlink} link`}>
              Product
            </Nav.Link>
            <Nav.Link href="#pricing" className={`${css.navlink} link`}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#testimonials" className={`${css.navlink} link`}>
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact_us" className={`${css.navlink} link`}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <ButtonUser
              text="Buy Now"
              variant="danger"
              view="common"
              handleClick={handleShow}
            />
          </Nav>
          <ModalOrder isModalOpen={isModalOpen} handleClose={handleClose} />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
