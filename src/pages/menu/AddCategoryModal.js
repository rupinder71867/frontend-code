import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination } from 'react-bootstrap';

const AddCategoryModal = (props) => {
 const { show, handleClose, handleCategoy, title } = props;
 const [active, setActive] = useState(1);
 var formArrObje = { status: true }
 const [formArr, setformArr] = useState(formArrObje);
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
 const handleStatusChange = evt => {
  const name = evt.target.name;
  setformArr({
   ...formArr,
   [name]: evt.target.checked
  })
 }

 const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
   event.preventDefault();
   event.stopPropagation();
  } else {
   handleCategoy(formArr);
   event.preventDefault();
   event.stopPropagation();
  }
  setValidated(true);
 }
 console.log('status=', formArr.status)
 return (
  <>
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Add Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
       <Col>
        <Form.Label>Title</Form.Label>
        <Form.Control required type="text" name="title" onChange={handleChange} placeholder="Enter title" />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col><Form.Label>Status</Form.Label></Col>
      </Row>
      <Row className='mt-1'>
       <Col className='col-md-2'>
        <Form.Check
         type="checkbox"
         label="Active"
         checked={formArr.status}
         onChange={handleStatusChange}
         name="status"
         id="active"
        />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col align="Right">
        <Button type="submit">Save</Button>
       </Col>
      </Row>
     </Form>
    </Modal.Body>
   </Modal>
  </>
 );
}
export default AddCategoryModal;

