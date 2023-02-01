import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, ModalFooter } from 'react-bootstrap';

const AddShiftModal = (props) => {
 const { show, handleClose } = props;
 const [active, setActive] = useState(1);
 const [formArr, setformArr] = useState(1);
 const [validated, setValidated] = useState(false);

 const handleSetActive = (e) => {
  setActive(e.target.text)
 }

 const handleChange = evt => {
  const name = evt.target.name;
  const value = evt.target.value
  setformArr({
   ...formArr,
   [name]: value
  })
 }

 const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
   event.preventDefault();
   event.stopPropagation();
  } else {
   event.preventDefault();
   event.stopPropagation();
  }
  setValidated(true);
 }

 return (
  <>
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Add Shift</Modal.Title>
    </Modal.Header>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

     <Modal.Body>
      <Row>
       <Col>
        <Form.Label>Title</Form.Label>
        <Form.Control required type="text" name="title" onChange={handleChange} placeholder="Enter title" />
       </Col>
      </Row>
      <Row>
       <Col className="mt-2">
        <Form.Label>Descriptions</Form.Label>
        <Form.Control as="textarea" name="descriptions" onChange={handleChange} placeholder="Enter descriptions" />
       </Col>
      </Row>
     </Modal.Body>
     <Modal.Footer>
      <Form.Group>
       <Row>
        <Col>
         <Button onClick={handleClose}>Cancal</Button>
        </Col>
        <Col align="Right">
         <Button type="submit">Save</Button>
        </Col>
       </Row>
      </Form.Group>
     </Modal.Footer>
    </Form>

   </Modal>
  </>
 );
}

export default AddShiftModal;

