import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import AllMenu from './AllMenu';
import ActiveMenu from './ActiveMenu';
import InactiveMenu from './InactiveMenu';

const Menu = () => {
 const [allMenu, setAllMenu] = useState(true);
 const [activeMenu, setActiveMenu] = useState(false);
 const [inactive, setInactive] = useState(false);
 const handleChange = (e) => {
  const btnName = e.target.name;
  if (btnName == 'all') {
   setAllMenu(true);
   setActiveMenu(false);
   setInactive(false)
  } else if (btnName == 'active') {
   setAllMenu(false);
   setActiveMenu(true);
   setInactive(false)
  } else {
   setAllMenu(false);
   setActiveMenu(false);
   setInactive(true);
  }

 }
 return (
  <Container fluid>
   <Row className="mt-3">
    <Col>
     <h4>Menu</h4>
    </Col>
   </Row>
   <Row style={{ width: '50%' }}>
    <Col>
     <Button onClick={handleChange} name="all" style={{ width: '100%', backgroundColor: 'white', color: 'black', borderColor: 'snow', backgroundColor: allMenu ? 'green' : 'white' }}>All</Button>
    </Col>
    <Col>
     <Button onClick={handleChange} name="active" style={{ width: '100%', backgroundColor: 'white', color: 'black', borderColor: 'snow', backgroundColor: activeMenu ? 'green' : 'white' }}>Active</Button>
    </Col>
    <Col>
     <Button onClick={handleChange} name="inactive" style={{ width: '100%', backgroundColor: 'white', color: 'black', borderColor: 'snow', backgroundColor: inactive ? 'green' : 'white' }}>Inactive</Button>
    </Col>
   </Row>
   {allMenu ? <AllMenu /> : ''}
   {activeMenu ? <ActiveMenu /> : ''}
   {inactive ? <InactiveMenu /> : ''}
  </Container >
 )
}
export default Menu;