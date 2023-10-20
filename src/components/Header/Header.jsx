import css from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/logo.png";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);
  return (
    <header className={css.header}>
      <Navbar className="pt-0 pb-0">
        <Container className="border border-primary">
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
            <Nav.Link href="#contactus" className={`${css.navlink} link`}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger" className={css.byNowButton}>
              Buy Now
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
