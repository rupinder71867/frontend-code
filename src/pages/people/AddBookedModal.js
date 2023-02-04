import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, ModalFooter } from 'react-bootstrap';

const AddBookedModal = (props) => {
 const { show, handleClose, handleData } = props;
 const [active, setActive] = useState(0);
 const [formArr, setformArr] = useState(1);
 const [validated, setValidated] = useState(false);

 const handleSetActive = (e) => {
  setActive(e.target.tabIndex)
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
   handleData(formArr);
   event.preventDefault();
   event.stopPropagation();
  }
  setValidated(true);
 }



 return (
  <>
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Add Booked</Modal.Title>
    </Modal.Header>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

     <Modal.Body>
      <Row>
       <Col>
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" name="sname" onChange={handleChange} />
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

export default AddBookedModal;

