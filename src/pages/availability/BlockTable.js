import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddTableBlockModal from './AddTableBlockModal';
import { FaTrashAlt } from "react-icons/fa";


const BlockTable = () => {
 const [show, setShow] = useState(false);
 const [shiftList, setShiftList] = useState([]);
 const handleShow = () => {
  setShow(true);
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleData = (item) => {
  setShiftList(shiftList => [...shiftList, item]);
  setShow(false);

 }
 const removeTable = (arrIndex) => {
  setShiftList([
   ...shiftList.slice(0, arrIndex),
   ...shiftList.slice(arrIndex + 1)
  ]);

 }

 return (
  <>{show ? <AddTableBlockModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
   <Row>
    <Col align="center"><h4>Block tables</h4></Col>
   </Row>
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Blocks
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Add Table Block</Button>
    </Col>
   </Row>
   <Row>

   </Row>
   <Row>
    <Table striped bordered hover>
     <thead>
      <tr>
       <th>#</th>
       <th>Block Title</th>
       <th>Start Date</th>
       <th>End Date</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {shiftList.map((x, i) =>
       <tr key={i}>
        <td>{i + 1}</td>
        <td>{x.shiftTitle}</td>
        <td>{x.sdate}</td>
        <td>{x.edate}</td>
        <td><FaTrashAlt onClick={() => removeTable(i)} /></td>

       </tr>

      )}
     </tbody>
    </Table>

   </Row>
  </>
 )
}
export default BlockTable;