import React, { useState } from 'react';
import {Modal, Button, Form, Row, Col, Pagination} from 'react-bootstrap';

const AddTagModal = (props)=> {
  const {show, handleClose, handleTags} = props;
  const [active, setActive] = useState(1);
  const [formArr, setformArr] = useState(1);
  const [validated, setValidated] = useState(false);

  const handleSetActive =(e) => {
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
        handleTags(formArr);
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
}    

  return (
    <>
      <Modal show = {show} onHide = {handleClose}>
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
          <Row>
          <Col className="mt-2">
            <Form.Label>Descriptions</Form.Label>
            <Form.Control as="textarea" name="descriptions" onChange={handleChange} placeholder="Enter descriptions" />
          </Col>
          </Row>
          <Row className="mt-2">
            <Col>
            <Form.Label>Choose Tag Color</Form.Label>
            <Form.Control name="color" type="color" onChange={handleChange}/>
            </Col>
          </Row>
        <Row className='mt-2'>
          <Col align="Right">
          <Button type="submit">Add Category</Button>
          </Col>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTagModal;

