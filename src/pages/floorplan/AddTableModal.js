import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination } from 'react-bootstrap';

const AddTableModal = (props) => {
  const { show, handleClose, handleTables, areaList } = props;
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
      handleTables(formArr);
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Table</Modal.Title>
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
              <Col className='mt-2'>
                <Form.Label>Min Cover</Form.Label>
                <Form.Control required type="number" name="minCover" onChange={handleChange} placeholder="Min Cover" />
              </Col>
            </Row>
            <Row>
              <Col className='mt-2'>
                <Form.Label>Max Cover</Form.Label>
                <Form.Control required type="number" name="maxCover" onChange={handleChange} placeholder="Max Cover" />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col>
                <Form.Label>Select Area</Form.Label>
                <Form.Select name="area" onChange={handleChange}>
                  <option></option>
                  {
                    areaList.map((x, i) =>
                      <option key={i}>{x.title}</option>
                    )
                  }
                </Form.Select>

              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control as="textarea" name="descriptions" onChange={handleChange} placeholder="Enter descriptions" />
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col align="Right">
                <Button type="submit">Add Table</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AddTableModal;

