import { Modal, Button } from "react-bootstrap";
import "../../App.css";

import UploadImg from "../../pages/UploadImage/UploadImg";
function CreatePin(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="height"
    >
      <Modal.Header closeButton className="border-0 height">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="ms-6 p-2 d-block"
        >
          Create Pin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UploadImg />
      </Modal.Body>
      <Modal.Footer className="border-0">
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePin;
