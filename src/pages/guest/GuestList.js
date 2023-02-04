import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddGuestModal from './AddGuestModal';

const GuestList = (props) => {
 const { areaList } = props;
 const [show, setShow] = useState(false);
 const handleClose = () => {
  setShow(false);
 }

 const handleShow = () => setShow(true);
 const [guest, setGuest] = useState([]);

 const handleGuestList = (item) => {
  setGuest(guest => [...guest, item]);
  setShow(false);
 }
 const removeTable = (arrIndex) => {
  setGuest([
   ...guest.slice(0, arrIndex),
   ...guest.slice(arrIndex + 1)
  ]);

 }

 return (
  <Container>
   {show ? <AddGuestModal show={show} handleGuestList={handleGuestList} handleClose={handleClose} handleShow={handleShow} /> : ''}

   <Row className="border-bottom mt-4">
    <Col style={{ fontWeight: 600 }}>
     Guests
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Add Guest</Button>
    </Col>
   </Row>
   <Row className='mt-2'>
    <Col>

     <Table striped bordered hover>
      <thead>
       <tr>
        <th>#</th>
        <th>Name</th>
        <th>Net Spend</th>
        <th>Avg Vist</th>
        <th>Avg Cover</th>
        <th>Visit</th>
        <th>Cancal</th>
        <th>No Show</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody>
       {guest.map((x, i) =>
        <tr key={i}>
         <td>{i + 1}</td>
         <td>{x.gname}</td>
         <td>{x.nspend}</td>
         <td>{x.avisit}</td>
         <td>{x.acover}</td>
         <td>{x.vist}</td>
         <td>{x.cancal}</td>
         <td>{x.noshow}</td>
         <td><FaTrashAlt onClick={() => removeTable(i)} /></td>
        </tr>

       )}
      </tbody>
     </Table>


    </Col>
   </Row>
  </Container>


 )
}

export default GuestList;
