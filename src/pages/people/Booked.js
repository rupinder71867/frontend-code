import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddBookedModal from './AddBookedModal';
import { FaTrashAlt } from "react-icons/fa";


const Booked = () => {
 const [show, setShow] = useState(false);
 const [bookedList, setBookedList] = useState([]);
 const handleShow = () => {
  setShow(true);
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleData = (item) => {
  setBookedList(bookedList => [...bookedList, item]);
  setShow(false);

 }
 const removeTable = (arrIndex) => {
  setBookedList([
   ...bookedList.slice(0, arrIndex),
   ...bookedList.slice(arrIndex + 1)
  ]);

 }

 return (
  <>{show ? <AddBookedModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Booked List
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Add Booked</Button>
    </Col>
   </Row>
   <Row>

   </Row>
   <Row>
    <Table striped bordered hover>
     <thead>
      <tr>
       <th>#</th>
       <th>Name</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {bookedList.map((x, i) =>
       <tr key={i}>
        <td>{i + 1}</td>
        <td>{x.sname}</td>
        <td><FaTrashAlt onClick={() => removeTable(i)} /></td>
       </tr>
      )}
     </tbody>
    </Table>

   </Row>
  </>
 )
}
export default Booked;