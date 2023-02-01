import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, Container, Dropdown, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

const CreateAutoMatedTagModal = (props) => {
  const { show, handleClose, handleData } = props;
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
  const ArrCondition = [];
  ArrCondition[0] = { condlabel: '', condOperater: '', codValue: '' };
  const [conditions, setConditions] = useState(ArrCondition);

  const ArrActions = [];
  ArrActions[0] = { condlabel: '', condOperater: '', codValue: '' };
  const [actions, setActions] = useState(ArrActions);


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
  const removeConditions = (arrIndex) => {
    setConditions([
      ...conditions.slice(0, arrIndex),
      ...conditions.slice(arrIndex + 1)
    ]);

  }
  const handleConditions = () => {
    setConditions(conditions => [...conditions, { condlabel: '', condOperater: '', codValue: '' }]);

  }
  const removeActions = (arrIndex) => {
    setActions([
      ...actions.slice(0, arrIndex),
      ...actions.slice(arrIndex + 1)
    ]);

  }
  const handleActions = () => {
    setActions(actions => [...actions, { condlabel: '', condOperater: '', codValue: '' }]);

  }

  return (
    <>
      <Modal className="modal-lg" show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Modal.Header closeButton>
            <Modal.Title>Create AutoMated Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label style={{ width: '100%' }}>Tag Name</Form.Label>
                <Form.Control required type="text" name="tagName" onChange={handleChange} placeholder="Enter Tag Name" />
              </Col>
              <Col>
                <Form.Label style={{ width: '100%' }}>Descriptions</Form.Label>
                <Form.Control type="textarea" name="descriptions" onChange={handleChange} />
              </Col>

            </Row>

            <Row className="mt-4">
              <Col>
                <Form.Check
                  label="Local"
                  name="group1"
                  type="radio"
                  id="hours"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Check
                  label="All Location"
                  name="group1"
                  type="radio"
                  id="days"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Form.Label style={{ width: '100%' }}>Condtion</Form.Label>
                {conditions.map((x, i) =>
                  <Row className='mt-1'>
                    <Col>
                      <Form.Select name="area" onChange={handleChange}>
                        <option></option>
                        <option>Guest Visit Count</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select name="area" onChange={handleChange}>
                        <option></option>
                        <option>Equals Exactly</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select name="area" onChange={handleChange}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <FaTrashAlt onClick={() => removeConditions(i)} /></Col>
                  </Row>
                )}
              </Col>
            </Row>
            <Row>
              <Col className="col-md-4 mt-2">
                <Button onClick={handleConditions}>Add Condition</Button>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <Form.Label style={{ width: '100%' }}>Actions</Form.Label>
                {actions.map((x, i) =>
                  <Row className='mt-1'>
                    <Col>
                      <Form.Select name="area" onChange={handleChange}>
                        <option></option>
                        <option>Add Guest Tag</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select name="area" onChange={handleChange}>
                        <option></option>
                        <option>Vip</option>
                      </Form.Select>

                    </Col>
                    <Col>
                      <FaTrashAlt onClick={() => removeActions(i)} /></Col>
                  </Row>

                )}
              </Col>
            </Row>
            <Row>
              <Col className="col-md-4 mt-2">
                <Button onClick={handleActions}>Add Action</Button>
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
export default CreateAutoMatedTagModal;

