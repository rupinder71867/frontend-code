import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

const Payment = () => {
 const [show, setShow] = useState(false);
 const openPaymentListObj = { table: 'M10', status: 'pending', DividedBy: '2', Tip: '0', Paid: '80 of 110' }
 const [openPaymentList, setOpenPaymentList] = useState([openPaymentListObj]);
 const handleShow = () => {
  setShow(true);
 }
 const handleClose = () => {
  setShow(false);
 }


 return (
  <Container fluid>
   <Row className="border-bottom mt-2">
    <Col style={{ fontWeight: 600 }}>
     Open Payment List
    </Col>
   </Row>
   <Row>
    <Col>
     <Table striped bordered hover>
      <thead>
       <tr>
        <th>#</th>
        <th>Table</th>
        <th>Status</th>
        <th>Divided By</th>
        <th>Tip</th>
        <th>Paid</th>
       </tr>
      </thead>
      <tbody>
       {openPaymentList.map((x, i) =>
        <tr key={i}>
         <td>{i + 1}</td>
         <td>{x.table}</td>
         <td>{x.status}</td>
         <td>{x.DividedBy}</td>
         <td>{x.Tip}</td>
         <td>{x.Paid}</td>
        </tr>

       )}
      </tbody>
     </Table>
    </Col>
   </Row>
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Completed Payment List
    </Col>
   </Row>
   <Row>
    <Col>
     <Table striped bordered hover>
      <thead>
       <tr>
        <th>#</th>
        <th>Table</th>
        <th>Status</th>
        <th>Divided By</th>
        <th>Tip</th>
        <th>Paid</th>
       </tr>
      </thead>
      <tbody>
       {openPaymentList.map((x, i) =>
        <tr key={i}>
         <td>{i + 1}</td>
         <td>{x.table}</td>
         <td>{x.status}</td>
         <td>{x.DividedBy}</td>
         <td>{x.Tip}</td>
         <td>{x.Paid}</td>
        </tr>

       )}
      </tbody>
     </Table>
    </Col>
   </Row>
   <Row>
    <Col style={{ textAlign: 'right' }}>
     <Button style={{ width: '157px' }}>Open Order 100</Button>
    </Col>
   </Row>
   <Row className='mt-2'>
    <Col style={{ textAlign: 'right' }}>
     <Button style={{ width: '158px' }}>Close Paid 200sar</Button>
    </Col>
   </Row>
  </Container>
 )
}
export default Payment;