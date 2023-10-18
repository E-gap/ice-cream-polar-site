import css from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className={css.header}>
      <Navbar>
        <Container className="border border-primary">
          <Navbar.Brand href="#home">
            <img src={logo} width="40px" alt="site logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" className={`${css.navlink}`}>
              HOME
            </Nav.Link>
            <Nav.Link href="#shop" className={`${css.navlink}`}>
              SHOP
            </Nav.Link>
            <Nav.Link href="#lookbook" className={`${css.navlink}`}>
              LOOKBOOK
            </Nav.Link>
            <Nav.Link href="#features" className={`${css.navlink}`}>
              FEATURES
            </Nav.Link>
            <Nav.Link href="#pages" className={`${css.navlink}`}>
              PAGES
            </Nav.Link>
            <Nav.Link href="#blog" className={`${css.navlink}`}>
              BLOG
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="link" className={css.searchButton}>
              <BiSearch className={css.icon} />
            </Button>
            <Nav.Link href="#shop" className={`${css.navlink}`}>
              <MdFavoriteBorder className={css.icon} />
            </Nav.Link>
            <Nav.Link href="#lookbook" className={`${css.navlink}`}>
              <AiOutlineShoppingCart className={css.icon} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
