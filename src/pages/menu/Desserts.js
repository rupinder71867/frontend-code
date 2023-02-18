import { Button, Row, Col, Accordion, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddStarterModal from './AddStarterModal';

const Desserts = (props) => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const [slad, setSlads] = useState([]);
 const [active, setActive] = useState(1);
 const handleStarters = (item) => {
  setSlads(slad => [...slad, item]);
  setShow(false)
 }
 const handleSetActive = (e) => {
  setActive(e.target.text)
 }
 const removeStarter = (arrIndex) => {
  setSlads([
   ...slad.slice(0, arrIndex),
   ...slad.slice(arrIndex + 1)
  ]);

 }

 return (
  <>
   {show ? <AddStarterModal title='Desserts' show={show} handleStarters={handleStarters} handleShow={handleShow} handleClose={handleClose} /> : ''}
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Desserts
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Add Main Course</Button>
    </Col>
   </Row>
   <Row className='mt-2'>
    <Col>
     <Accordion>

      {slad.map((x, i) =>
       <Accordion.Item onClick={handleSetActive} key={i} eventKey={i}>
        <Accordion.Header>
         <Col className='col-me-1'><img width="37" src='menu.jpeg'></img></Col>
         <Col className="col-md-6">{x.title}</Col>
         <Col className='col-md-2'>      <Form.Check
          type="switch"
          id="custom-switch"
          label=""
          checked='true'
         />
         </Col>
         <Col className="col-md-2">SR 16.0</Col>
         <Col className="col-md-1"><FaTrashAlt onClick={() => removeStarter(i)} /></Col>
        </Accordion.Header>
        <Accordion.Body>
         <Row>Descriptions:{x.descriptions}</Row>
         <Row>Note:{x.note}</Row>
        </Accordion.Body>
       </Accordion.Item>
      )}
     </Accordion>

    </Col>
   </Row>
  </>


 )
}

export default Desserts;
