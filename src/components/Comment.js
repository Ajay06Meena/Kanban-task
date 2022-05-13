import React from 'react'
import { Modal, Button } from "react-bootstrap";

const Comment = ({ showModal, handleClose, handleSave, setComment, comment, id }) => {

  return (
    <>
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Write Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type="text" placeholder='comment...' value={comment} onChange={(e) => { setComment(e.target.value) }} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { handleClose(); handleSave(id) }}>
              Add Comment
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Comment