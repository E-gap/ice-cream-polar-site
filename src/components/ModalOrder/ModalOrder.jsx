import css from "./ModalOrder.module.css";
import Modal from "react-bootstrap/Modal";

const ModalOrder = ({ isModalOpen, handleClose }) => {
  return (
    <Modal show={isModalOpen} onHide={handleClose}>
      <Modal.Header closeButton />
      <div className={css.modalDiv}>
        <p className={css.modalText}>There will be your order's details</p>
      </div>
    </Modal>
  );
};

export default ModalOrder;
