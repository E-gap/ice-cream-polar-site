import css from "./ContactSection.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ContactSection = () => {
  return (
    <section id="contact_us" className={css.contactSection}>
      <Container>
        <div className={css.sectionContent}>
          <h1 className={css.sectionHeadline}>
            Have Question in Mind? <br />
            Let us help you
          </h1>
          <InputGroup className={`${css.inputGroup}`}>
            <Form.Control
              className={`${css.input}`}
              placeholder="Enter your question"
              aria-label="Enter your question"
            />
            <Button
              className={`${css.buttonSend}`}
              variant="danger"
              id="button-addon2"
            >
              Send
            </Button>
          </InputGroup>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
