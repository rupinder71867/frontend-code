import { Container, Row, Col, Tab, Nav, Button, Table } from 'react-bootstrap';
import CreateAutoMatedEmailModal from './CreateAutoMatedEmailModal';
import React, { useState, useEffect } from 'react';

const AutomatedMessage = () => {
 const [show, setShow] = useState(false);
 const [emailData, setEmailData] = useState([]);

 const handleShow = () => {
  setShow(true)
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleData = (item) => {
  console.log('emailData=', item)
  setEmailData(emailData => [...emailData, item]);
  setShow(false);

 }
 return (
  <>
   {show ? <CreateAutoMatedEmailModal handleData={handleData} show={show} handleClose={handleClose} handleShow={handleShow} /> : ''}
   <Row>
    <Col align="center"><h4></h4></Col>
   </Row>
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Automated Email
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Create New Automated Email</Button>
    </Col>
   </Row>
   <Row>
    <Table striped bordered hover>
     <thead>
      <tr>
       <th>#</th>
       <th>Email Name</th>
       <th>Status</th>
       <th>Reply Email</th>
      </tr>
     </thead>
     <tbody>
      {emailData.map((x, i) =>
       <tr>
        <td>{i + 1}</td>
        <td>{x.emailName}</td>
        <td>Active</td>
        <td>{x.replyEmail}</td>
       </tr>

      )}
     </tbody>
    </Table>

   </Row>
  </>

 )
}
export default AutomatedMessage;