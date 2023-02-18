import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import AllMenu from './AllMenu';
import ActiveMenu from './ActiveMenu';
import InactiveMenu from './InactiveMenu';
import AddCategoryModal from './AddCategoryModal';
import { FaPlusSquare } from "react-icons/fa";
import MenuItem from './MenuItem';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const Menu = () => {
 const navigate = useNavigate();
 const redirectHome = () => {
  navigate('/');
 }

 const [allMenu, setAllMenu] = useState(true);
 const [activeMenu, setActiveMenu] = useState(false);
 const [inactive, setInactive] = useState(false);
 const [show, setShow] = useState(false);
 const [menu, setMenu] = useState();

 const catItem = [{ title: 'Starters', status: 1 }, { title: 'Dinner', status: 0 }];
 const [category, setCategoryList] = useState(catItem);
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
 const handleShow = () => {
  setShow(true)
 }
 const handleClose = () => {
  setShow(false);
 }
 const handleCategory = (item) => {
  setCategoryList(category => [...category, item]);
  setShow(false)
 }
 const handleMenuItem = (title) => {
  setMenu(title)
 }
 return (
  <Container fluid>
   {show ? <AddCategoryModal handleCategoy={handleCategory} handleClose={handleClose} show={show} /> : ''}
   <Row className='mt-4' style={{ minHeight: "500px" }}>
    <Col className='col-md-5' style={{ backgroundColor: 'white', padding: '10px' }}>
     <Row style={{ padding: "10px" }}>
      <Col>Section</Col>
      <Col style={{ textAlign: 'right', fontSize: '20px' }}>
       <FaPlusSquare onClick={handleShow} />
      </Col>
     </Row>
     <Row style={{ padding: "10px", margin: "10px", border: "1px solid", borderRadius: "14px", background: "grey" }}>
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
     <Row>
      {allMenu ? <AllMenu handleMenuItem={handleMenuItem} categoryList={category} /> : ''}
      {activeMenu ? <ActiveMenu handleMenuItem={handleMenuItem} categoryList={category} /> : ''}
      {inactive ? <InactiveMenu handleMenuItem={handleMenuItem} categoryList={category} /> : ''}
      <Button onClick={redirectHome} style={{ width: '90%', margin: "15px" }}><FaArrowLeft /> Back</Button>
     </Row>
    </Col>
    <Col className='col-md-7'>
     <MenuItem title={menu} />
    </Col>
   </Row>
  </Container >
 )
}
export default Menu;