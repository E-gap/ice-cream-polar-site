import css from "./ModalDetails.module.css";
import Modal from "react-bootstrap/Modal";

const ModalDetails = ({ isModalOpen, handleClose }) => {
  return (
    <Modal show={isModalOpen} onHide={handleClose}>
      <Modal.Header closeButton />
      <div className={css.modalDiv}>
        <p className={css.modalText}>There will be all details of product</p>
      </div>
    </Modal>
  );
};

export default ModalDetails;
