import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, ModalFooter, Container } from 'react-bootstrap';

const AddBlockModal = (props) => {
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
 const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
 ];
 const d = new Date();
 const monthName = monthNames[d.getMonth()]
 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 const day = d.getDate();
 var dayName = days[d.getDay()];




 return (
  <>
   <Modal show={show} onHide={handleClose} className="modal-lg">
    <Modal.Header closeButton>
     <Modal.Title>Add Block</Modal.Title>
    </Modal.Header>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

     <Modal.Body>
      <Container style={{ backgroundColor: 'lightgrey', padding: '10px' }}>
       <Row>
        <Col><h5>Block Reservation</h5></Col>
       </Row>
       <Row>
        <Col>{dayName + ', '}{day + ' ' + monthName}</Col>
       </Row>
      </Container>
      <Row className="mt-2">

       <Col>
        <Form.Label>Block Title</Form.Label>
        <Form.Control required type="text" name="shiftTitle" onChange={handleChange} />
       </Col>

      </Row>
      <Row className="mt-2">
       <Col>
        <h5>Block new reservation</h5>
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Block Start Time</Form.Label>
        <Form.Control required type="time" name="ftime" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Block End Time</Form.Label>
        <Form.Control required type="time" name="ltime" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Check type="checkbox" id="checkbox" label="Online Hours" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Check type="checkbox" id="checkbox" label="In-House hours" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Check type="checkbox" id="checkbox" label="Menu" onChange={handleChange} />
       </Col>
      </Row>


     </Modal.Body>
     <Modal.Footer>
      <Form.Group>
       <Row>

        <Col>
         <Button type="submit">Block Selected Hours</Button>
        </Col>
       </Row>
      </Form.Group>
     </Modal.Footer>
    </Form>

   </Modal>
  </>
 );
}

export default AddBlockModal;

