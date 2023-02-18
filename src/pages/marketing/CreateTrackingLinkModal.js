import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, Container, Dropdown, Table } from 'react-bootstrap';

const CreateTrackingLink = (props) => {
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
        <Form.Label style={{ width: '100%' }}>Link</Form.Label>
        <Form.Control type="text" name="Link" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label style={{ width: '100%' }}>Link Id</Form.Label>
        <Form.Control type="text" name="LinkId" onChange={handleChange} />
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
export default CreateTrackingLink;

