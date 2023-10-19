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
      <Navbar>
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} width="40px" alt="site logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/home" className={`${css.navlink}`}>
              HOME
            </Nav.Link>
            <Nav.Link href="/shop" className={`${css.navlink}`}>
              SHOP
            </Nav.Link>
            <Nav.Link href="/lookbook" className={`${css.navlink}`}>
              LOOKBOOK
            </Nav.Link>
            <Nav.Link href="/features" className={`${css.navlink}`}>
              FEATURES
            </Nav.Link>
            <Nav.Link href="/pages" className={`${css.navlink}`}>
              PAGES
            </Nav.Link>
            <Nav.Link href="/blog" className={`${css.navlink}`}>
              BLOG
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="link"
              className={css.searchButton}
              onClick={handleShow}
            >
              <BiSearch className={css.icon} />
            </Button>
            <Nav.Link href="/favorites" className={`${css.navlink}`}>
              <MdFavoriteBorder className={css.icon} />
            </Nav.Link>
            <Nav.Link href="/basket" className={`${css.navlink}`}>
              <AiOutlineShoppingCart className={css.icon} />
            </Nav.Link>
          </Nav>
          <Modal show={isModalOpen} onHide={handleClose}>
            <InputGroup>
              <Form.Control
                placeholder="Input search word"
                aria-label="Input search word"
              />
              <Button variant="primary" onClick={handleClose}>
                Search
              </Button>
            </InputGroup>
          </Modal>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
