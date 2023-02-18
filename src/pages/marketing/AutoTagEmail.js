import { Container, Row, Col, Tab, Nav, Button, Table } from 'react-bootstrap';
import CreateAutoMatedTagModal from './CreateAutoMatedTagModal';
import React, { useState, useEffect } from 'react';

const AutoTagEmail = () => {
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
   {show ? <CreateAutoMatedTagModal handleData={handleData} show={show} handleClose={handleClose} handleShow={handleShow} /> : ''}
   <Row>
    <Col align="center"><h4></h4></Col>
   </Row>
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Auto Tag
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Create Auto Tag</Button>
    </Col>
   </Row>
   <Row>
    <Table striped bordered hover>
     <thead>
      <tr>
       <th>#</th>
       <th>Tag Name</th>
       <th>Type</th>
      </tr>
     </thead>
     <tbody>
      {emailData.map((x, i) =>
       <tr>
        <td>{i + 1}</td>
        <td>{x.tagName}</td>
        <td>Local</td>
       </tr>

      )}
     </tbody>
    </Table>

   </Row>
  </>

 )
}
export default AutoTagEmail;