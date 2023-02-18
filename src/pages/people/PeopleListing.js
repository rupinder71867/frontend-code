import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddServerModal from './AddServerModal';
import { FaTrashAlt } from "react-icons/fa";


const PeopleListing = () => {
 const [show, setShow] = useState(false);
 const [peopleList, setPeopleList] = useState([]);
 const handleShow = () => {
  setShow(true);
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleData = (item) => {
  setPeopleList(peopleList => [...peopleList, item]);
  setShow(false);

 }
 const removeTable = (arrIndex) => {
  setPeopleList([
   ...peopleList.slice(0, arrIndex),
   ...peopleList.slice(arrIndex + 1)
  ]);

 }

 return (
  <>{show ? <AddServerModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Permission List
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Add Permission</Button>
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
       <th>Email</th>
       <th>Role</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {peopleList.map((x, i) =>
       <tr key={i}>
        <td>{i + 1}</td>
        <td>{x.pname}</td>
        <td>{x.email}</td>
        <td>{x.role}</td>
        <td><FaTrashAlt onClick={() => removeTable(i)} /></td>
       </tr>

      )}
     </tbody>
    </Table>

   </Row>
  </>
 )
}
export default PeopleListing;