import {Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import RoomListing from './RoomListing';
import SittingAreaListing from './SittingAreaListing';
import TableListing from './TableListing';

const Rooms =() => {
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
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="first" className="nav-link">Rooms</Nav.Link>
              </Nav.Item>
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="second" className="nav-link">Sittting Area</Nav.Link>
              </Nav.Item>
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="third" className="nav-link">Tables</Nav.Link>
              </Nav.Item>
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="fourth" className="nav-link">Table Grouping</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className='my-5 pe-5 ps-5 col-md-9'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                 <RoomListing/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <SittingAreaListing/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <TableListing/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h4>Table Grouping</h4>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>

    )
}
export default Rooms;