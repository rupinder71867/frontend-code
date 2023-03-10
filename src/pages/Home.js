import React, { useState } from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEllipsisVertical, faTable, faTableList, faCartShopping, faSquareCheck, faBullhorn, faComment, faNoteSticky, faBookOpen, faPeopleGroup, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import Availability from "./AddAvaliability";
import { useNavigate, NavLink } from "react-router-dom";



const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();
  const showAddVenu = () => {
    let path = `/add-venu`;
    navigate(path);
  }

  return (
    <>

      {show ? <Availability show={show} handleClose={handleClose} handleShow={handleShow} /> : ''}
      <Container fluid>

        <Row className='top-section'>
          <Col className="md-2">
            <div style={{ color: "black" }}>Good Evening, Zaib</div>
            <div style={{ color: "grey" }}>Manager Permission</div>
          </Col>
          <Col className="md-10" >
            <Row className="gap-4 justify-content-end">
              <Button as={Col} md="5" className="top-left mt-1" onClick={showAddVenu}>Select Venu</Button>
              <Button as={Col} md="5" className="top-left mt-1" onClick={handleShow}>Add Reservation</Button>
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col><NavLink to='/general'><div style={{ background: "#ff9559" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faTable} color={"white"} /></div></NavLink><div className='menu-text'>General</div></Col>
          <Col><NavLink to="/rooms"><div style={{ background: "#2196f3" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faTableList} /></div></NavLink><div className='menu-text'>Floor Plan</div></Col>
          <Col><NavLink to='/avaliability'><div style={{ background: "#ff7495" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faSquareCheck} /></div></NavLink><div className='menu-text'>Availability</div></Col>
          <Col><NavLink to='/payment'><div style={{ background: "#e8ba34" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faCartShopping} /></div></NavLink><div className='menu-text'>Payment</div></Col>
          <Col><NavLink to='/marketing'><div style={{ background: "#ff6759" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faBullhorn} /></div></NavLink><div className='menu-text'>Marketing Automation</div></Col>
        </Row>
        <Row>
          <Col><NavLink to="/menu"><div style={{ background: "#4bb04f" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faComment} /></div></NavLink><div className='menu-text'>Menu</div></Col>
          <Col><NavLink to='/integration'><div style={{ background: "#4bb04f" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faNoteSticky} /></div></NavLink><div className='menu-text'>Integration</div></Col>
          <Col><NavLink to='/report'><div style={{ background: "#1fb37c" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faBookOpen} /></div></NavLink><div className='menu-text'>Reports</div></Col>
          <Col><NavLink to='/guest'><div style={{ background: "#1fb37c" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faFaceGrinHearts} /></div></NavLink><div className='menu-text'>My Guest</div></Col>
          <Col><NavLink to="/people"><div style={{ background: "#1fb37c" }} className="menu-item rounded-3"><FontAwesomeIcon icon={faPeopleGroup} /></div></NavLink><div className='menu-text'>People</div></Col>
        </Row>
      </Container>
    </>

  )
};

export default Home;