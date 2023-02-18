import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination } from 'react-bootstrap';

const AddGuestModal = (props) => {
 const { show, handleClose, handleGuestList } = props;
 const [active, setActive] = useState(1);
 const [formArr, setformArr] = useState(1);
 const [validated, setValidated] = useState(false);


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
   handleGuestList(formArr);
   event.preventDefault();
   event.stopPropagation();
  }
  setValidated(true);
 }

 return (
  <>
   <Modal show={show} className="modal-lg" onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Add Guest</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
       <Col>
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" name="fname" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Last Name</Form.Label>
        <Form.Control required type="text" name="lname" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Pin code</Form.Label>
        <Form.Control required type="text" name="pincode" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>City</Form.Label>
        <Form.Control required type="text" name="city" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>State</Form.Label>
        <Form.Control required type="text" name="state" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Country</Form.Label>
        <Form.Control required type="text" name="country" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" name="email" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control required type="text" name="mobilenumber" onChange={handleChange} />
       </Col>
      </Row>

      <Row className='mt-2'>
       <Col align="Right">
        <Button type="submit">Add Guest</Button>
       </Col>
      </Row>
     </Form>
    </Modal.Body>
   </Modal>
  </>
 );
}
export default AddGuestModal;

