import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import RoomListing from './RoomListing';
import SittingAreaListing from './SittingAreaListing';
import TableListing from './TableListing';
import TableGrouping from './TableGrouping';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const Rooms = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate('/');
  }

  const [tablesList, setTablesList] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const handleAreaList = (areas) => {
    setAreaList(areas);
  }
  const handleTablesList = (tables) => {
    console.log('tables=', tables);
    setTablesList(tables);
  }
  const handleRoomsList = (rooms) => {
    setRoomList(rooms);
  }
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col>
          <h4>Floor Plans</h4>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col className='my-5 col-md-3'>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="first" className="nav-link">Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="second" className="nav-link">Sittting Area</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="third" className="nav-link">Tables</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="fourth" className="nav-link">Table Grouping</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button onClick={redirectHome} style={{ width: '100%' }}><FaArrowLeft /> Back</Button>

          </Col>
          <Col className='my-5 pe-5 ps-5 col-md-9'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <RoomListing handleRoomsList={handleRoomsList} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <SittingAreaListing handleAreaList={handleAreaList} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <TableListing areaList={areaList} handleTablesList={handleTablesList} />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <TableGrouping roomList={roomList} tablesList={tablesList} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>

  )
}
export default Rooms;