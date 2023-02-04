import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaBell, FaRegDotCircle, FaHome } from "react-icons/fa";
import Filter from './Filter'
import ProgressBar from './ProgressBar';
const Report = (props) => {
 const [show, setShow] = useState(false);
 const handleClose = () => {
  setShow(false);
 }

 const handleShow = () => setShow(true);
 const [report, setReport] = useState([]);

 const hanldeReportList = (item) => {
  setReport(report => [...report, item]);
  setShow(false);
 }
 const removeTable = (arrIndex) => {
  setReport([
   ...report.slice(0, arrIndex),
   ...report.slice(arrIndex + 1)
  ]);

 }

 return (
  <Container>

   <Row className="border-bottom mt-4">
    <Col>
     <img style={{ width: '80px' }} src="profile.png" />
    </Col>
    <Col style={{ fontWeight: 600 }}>
     <Row>
      <Col><h5>Reports</h5></Col>
     </Row>
     <Row>
      <Col style={{ color: "grey" }}>Manger Permission</Col>
     </Row>
    </Col>
    <Col className='activeReport'>
     Guest
    </Col>
    <Col className='activeNoReport'>
     Reservation
    </Col>
    <Col className='activeNoReport'>
     Payment
    </Col>
    <Col className='activeNoReport'>
     WaitList
    </Col>
    <Col className='activeNoReport'>
     Perfomance
    </Col>
    <Col className='activeNoReport'>
     <FaHome />
    </Col>
    <Col className='activeNoReport'>
     <FaBell />
    </Col>
    <Col className='activeNoReport'>
     <FaRegDotCircle />
    </Col>
   </Row>

   <Filter />
   <Row className='mt-4'>
    <Col className='progressBorder'>
     Total Guest
     <ProgressBar color="yellow" percentage="90" />
     Online:10 In-house :90
    </Col>
    <Col className='progressBorder'>
     New Vs Returing
     <ProgressBar color="red" percentage="30" />
     New:20 Return: 30
    </Col>
    <Col className='progressBorder'>
     Local Vs Tourist
     <ProgressBar color="blue" percentage="60" />
     Local: 60 Tourist: 40

    </Col>
    <Col className='progressBorder' >
     Gender

     <ProgressBar color="black" percentage="70" />
     Male : 30% Female: 70%
    </Col>

   </Row>

  </Container >


 )
}

export default Report;
