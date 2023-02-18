import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddGuestModal from './AddGuestModal';
import { FaStripe, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const GuestList = (props) => {
 const { areaList } = props;
 const [show, setShow] = useState(false);
 const handleClose = () => {
  setShow(false);
 }
 const navigate = useNavigate();
 const redirectHome = () => {
  navigate('/');
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
        <th>City</th>
        <th>State</th>
        <th>Country</th>
        <th>Phone No</th>
        <th>Pin Code</th>
        <th>Email</th>
        <th>Assets</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody>
       {guest.map((x, i) =>
        <tr key={i}>
         <td>{i + 1}</td>
         <td>{x.fname}</td>
         <td>{x.city}</td>
         <td>{x.state}</td>
         <td>{x.country}</td>
         <td>{x.mobilenumber}</td>
         <td>{x.pincode}</td>
         <td>{x.email}</td>
         <td>SAR 0 NET SPEND |0 CANCELS</td>
         <td><FaTrashAlt onClick={() => removeTable(i)} /></td>
        </tr>

       )}
      </tbody>
     </Table>


    </Col>
   </Row>
   <Row>
    <Col>
     <Button onClick={redirectHome} style={{ width: '100%' }}><FaArrowLeft /> Back</Button>

    </Col>
   </Row>
  </Container>


 )
}

export default GuestList;
