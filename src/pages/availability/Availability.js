import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Shifts from './Shifts';
import OnlineInventory from './OnlineInventory';
import Waitlist from './Waitlist';
import Block from './Block';
import BlockTable from './BlockTable';

const Availability = () => {
 return (
  <Container fluid>
   <Row className="mt-3">
    <Col>
     <h4>Avaiability</h4>
    </Col>
   </Row>
   <Tab.Container defaultActiveKey="first">
    <Row>
     <Col className='my-5 col-md-3'>
      <Nav variant="pills" className="flex-column">
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="first" className="nav-link">Shifts</Nav.Link>
       </Nav.Item>
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="second" className="nav-link">Online Inventory</Nav.Link>
       </Nav.Item>
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="third" className="nav-link">Block Reservation</Nav.Link>
       </Nav.Item>
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="fourth" className="nav-link">Block Table</Nav.Link>
       </Nav.Item>
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="fifth" className="nav-link">Waitlist</Nav.Link>
       </Nav.Item>
      </Nav>
     </Col>
     <Col className='my-5 pe-5 ps-5 col-md-9'>
      <Tab.Content>
       <Tab.Pane eventKey="first">
        <Shifts />
       </Tab.Pane>
       <Tab.Pane eventKey="second">
        <OnlineInventory />
       </Tab.Pane>
       <Tab.Pane eventKey="third">
        <Block />
       </Tab.Pane>
       <Tab.Pane eventKey="fourth">
        <BlockTable />
       </Tab.Pane>
       <Tab.Pane eventKey="fifth">
        <Waitlist />
       </Tab.Pane>
      </Tab.Content>
     </Col>
    </Row>
   </Tab.Container>
  </Container>

 )
}
export default Availability;