import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";
const Filter = () => {
 const [formArr, setformArr] = useState([]);
 const handleChange = evt => {
  const name = evt.target.name;
  const value = evt.target.value
  setformArr({
   ...formArr,
   [name]: value
  })
 }

 return (

  <Form>
   <Row className='mt-2 filterBorder'>

    <Col>
     <Form.Label>Start Date </Form.Label>
     <Form.Control required type="date" name="sdate" onChange={handleChange} />
    </Col>
    <Col>
     <Form.Label>End Date </Form.Label>
     <Form.Control required type="date" name="edate" onChange={handleChange} />
    </Col>
    <Col>
     <Form.Label>Time </Form.Label>
     <Form.Control required type="time" name="edate" onChange={handleChange} />
    </Col>
    <Col className='mt-2'>
     <Form.Label></Form.Label>
     <Form.Control required type="text" name="edate" onChange={handleChange} placeholder="Search" />
    </Col>
    <Col style={{ marginTop: '36px' }}>
     <FaFilter />
     <button style={{ paddingLeft: '10px', marginLeft: '10px' }}>Advanced Filters</button>
    </Col>
   </Row>

  </Form>
 )
}
export default Filter;