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
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Add Guest</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
       <Col>
        <Form.Label>Title</Form.Label>
        <Form.Control required type="text" name="gname" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Net Spend</Form.Label>
        <Form.Control required type="number" name="nspend" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Avg Vist</Form.Label>
        <Form.Control required type="number" name="avisit" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Avg Cover</Form.Label>
        <Form.Control required type="number" name="acover" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Vist</Form.Label>
        <Form.Control required type="number" name="vist" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Cancal</Form.Label>
        <Form.Control required type="number" name="cancal" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>No Show</Form.Label>
        <Form.Control required type="number" name="noshow" onChange={handleChange} />
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

