import React, { useState } from 'react';

import {Modal, Button, Form, Row, Col, Pagination} from 'react-bootstrap';


const AddTagModal = (props)=> {
  const {show, handleClose, handleTags} = props;
  const [active, setActive] = useState(1);
  const [formArr, setformArr] = useState(1);
  const handleSetActive =(e) => {
   console.log('e=',e.target.text)
   setActive(e.target.text)
  }
  const handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setformArr({
      ...formArr,
      [name]: value
    })
  }
  const saveForm =() => {
    handleTags(formArr);
  }




  return (
    <>
      <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
         <Row>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} placeholder="Enter title" />
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
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveForm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTagModal;

