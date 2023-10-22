import Button from "react-bootstrap/Button";
import css from "./Button.module.css";

const ButtonUser = ({ text, variant, view, handleClick }) => {
  const style = css[view];
  return (
    <Button
      variant={variant}
      className={style}
      onClick={() => {
        handleClick();
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonUser;
