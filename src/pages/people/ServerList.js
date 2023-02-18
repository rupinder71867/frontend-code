import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddServerModal from './AddServerModal';
import { FaTrashAlt } from "react-icons/fa";


const ServerList = () => {
 const [show, setShow] = useState(false);
 const [serverList, setServerList] = useState([]);
 const handleShow = () => {
  setShow(true);
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleData = (item) => {
  setServerList(serverList => [...serverList, item]);
  setShow(false);

 }
 const removeTable = (arrIndex) => {
  setServerList([
   ...serverList.slice(0, arrIndex),
   ...serverList.slice(arrIndex + 1)
  ]);

 }

 return (
  <>{show ? <AddServerModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Server List
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Add Server</Button>
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
       <th>Shift</th>
       <th>Table</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {serverList.map((x, i) =>
       <tr key={i}>
        <td>{i + 1}</td>
        <td>{x.sname}</td>
        <td>{x.shift}</td>
        <td>{x.table}</td>
        <td><FaTrashAlt onClick={() => removeTable(i)} /></td>
       </tr>
      )}
     </tbody>
    </Table>

   </Row>
  </>
 )
}
export default ServerList;