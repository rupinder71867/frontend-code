import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, ModalFooter } from 'react-bootstrap';

const AddShiftModal = (props) => {
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
     <Modal.Title>Add Shift</Modal.Title>
    </Modal.Header>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

     <Modal.Body>
      <Row>

       <Col>
        <Form.Label>Shift Title</Form.Label>
        <Form.Control required type="text" name="shiftTitle" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Shift Status</Form.Label>

        <Form.Check type="checkbox" id="checkbox" label="Shift Active" onChange={handleChange} />
       </Col>

      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Start Date</Form.Label>
        <Form.Control required type="date" name="sdate" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>End Date</Form.Label>
        <Form.Control required type="date" name="edate" onChange={handleChange} />
        <Form.Check type="checkbox" id="checkbox" label="Continue Indefinite" onChange={handleChange} />
       </Col>
      </Row>
      <Row>
       <Col>
        <Form.Label>Days of week</Form.Label>
        <Pagination size="lg">
         {weeekDays.map((x, i) =>
          <Pagination.Item onClick={handleSetActive} tabIndex={i} key={i} active={i == active} >
           {x}
          </Pagination.Item>

         )}
        </Pagination>
       </Col>
      </Row>

      <Row className='mt-2'>
       <Col>
        <Form.Label>First Seating</Form.Label>
        <Form.Control required type="time" name="ftime" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Last Seating</Form.Label>
        <Form.Control required type="time" name="ltime" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Min Covers Reservation</Form.Label>
        <Form.Control required type="text" name="min-cover-res" onChange={handleChange} />
       </Col>
       <Col>
        <Form.Label>Max Covers Reservation</Form.Label>
        <Form.Control required type="text" name="max-cover-res" onChange={handleChange} />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Interval</Form.Label>
        <Form.Select aria-label="Default select example">
         <option value="1">30 min</option>
         <option value="2">1 hour</option>
        </Form.Select>
       </Col>
       <Col>
        <Form.Label>Pacing</Form.Label>
        <Form.Control required type="text" name="max-cover-res" onChange={handleChange} />
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

export default AddShiftModal;

