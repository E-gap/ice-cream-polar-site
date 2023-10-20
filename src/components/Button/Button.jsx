import Button from "react-bootstrap/Button";
import css from "./Button.module.css";

const ButtonUser = ({ text, variant, view }) => {
  const style = css[view];
  return (
    <Button variant={variant} className={style}>
      {text}
    </Button>
  );
};

export default ButtonUser;
