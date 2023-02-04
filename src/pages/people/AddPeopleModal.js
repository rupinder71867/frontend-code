import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, ModalFooter } from 'react-bootstrap';

const AddPeopleModal = (props) => {
 const { show, handleClose, handleData } = props;
 const [active, setActive] = useState(0);
 const [formArr, setformArr] = useState(1);
 const [validated, setValidated] = useState(false);
 const weeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
   <Modal show={show} onHide={handleClose} className="modal-lg">
    <Modal.Header closeButton>
     <Modal.Title>Add Permission</Modal.Title>
    </Modal.Header>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

     <Modal.Body>
      <Row>
       <Col>
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" name="pname" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" name="email" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Role</Form.Label>
        <Form.Control required type="text" name="role" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" name="password" onChange={handleChange} />
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

export default AddPeopleModal;

