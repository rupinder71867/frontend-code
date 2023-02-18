import { Container, Row, Col, Tab, Nav, Button, Table } from 'react-bootstrap';
import CreateTrackingLinkModal from './CreateTrackingLinkModal';
import React, { useState, useEffect } from 'react';
import { FaCopy } from "react-icons/fa";


const TrackingLink = () => {
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
   {show ? <CreateTrackingLinkModal handleData={handleData} show={show} handleClose={handleClose} handleShow={handleShow} /> : ''}
   <Row>
    <Col align="center"><h4></h4></Col>
   </Row>
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Tracking Link
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Create New Tracking Link</Button>
    </Col>
   </Row>
   <Row>
    <Table striped bordered hover>
     <thead>
      <tr>
       <th>#</th>
       <th>Link</th>
       <th>Link Id</th>
       <th></th>
      </tr>
     </thead>
     <tbody>
      {emailData.map((x, i) =>
       <tr>
        <td>{i + 1}</td>
        <td>{x.Link}</td>
        <td>{x.LinkId}</td>
        <td><FaCopy /></td>
       </tr>

      )}
     </tbody>
    </Table>

   </Row>
  </>

 )
}
export default TrackingLink;