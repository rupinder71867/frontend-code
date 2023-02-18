import { Container, Row, Col, Tab, Nav, Button, Form, Accordion } from 'react-bootstrap';
import { FaPlusSquare, FaTrashAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import AddDish from './AddDish';

const MenuItem = (props) => {
 const title = typeof props.title == 'undefined' ? 'Starters' : props.title;
 const [show, setShow] = useState(false);
 const [dish, setDish] = useState([]);
 const [active, setActive] = useState(1);


 const handleSetActive = (e) => {
  setActive(e.target.text)
 }
 const removeStarter = (arrIndex) => {
  setDish([
   ...dish.slice(0, arrIndex),
   ...dish.slice(arrIndex + 1)
  ]);

 }


 const handleChange = () => {

 }
 const handleAddDish = () => {
  setShow(true);
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleDish = (item) => {
  setDish(dish => [...dish, item]);
  setShow(false)
 }
 return (
  <>
   {show ? <AddDish handleDish={handleDish} handleClose={handleClose} show={show} /> : ''}
   <Row>
    <Col>
     <Form.Control required type="text" name="title" onChange={handleChange} placeholder="Search" />
    </Col>
   </Row>
   <Row className="mt-2">
    <Col>
     <Button onClick={handleAddDish} style={{ width: "100%", backgroundColor: "white", color: "black" }}><FaPlusSquare /></Button>
    </Col>
   </Row>
   <Row className="mt-3" style={{ border: "1px solid", backgroundColor: "white", margin: "3px", padding: "10px", textAlign: "center" }}>
    <Col>
     <img style={{ border: "1px solid", borderRadius: "10px", marginRight: "10px" }} width="37" src='menu.jpeg'></img>{title}
    </Col>
   </Row>
   <Row className='mt-2'>
    <Col>
     <Accordion>

      {dish.map((x, i) =>
       <Accordion.Item onClick={handleSetActive} key={i} eventKey={i}>
        <Accordion.Header>
         <Col className='col-me-1'><img width="37" src='menu.jpeg'></img></Col>
         <Col className="col-md-6">{x.title}</Col>
         <Col className='col-md-2'>
          <Form.Check
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
export default MenuItem;