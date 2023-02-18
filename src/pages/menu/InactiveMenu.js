import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';

const InactiveMenu = () => {
 return (<Tab.Container defaultActiveKey="first">
  <Row>
   <Col className='my-5 col-md-3'>
    <Nav variant="pills" className="flex-column">
     <Nav.Item className='nav-item'>
      <Nav.Link eventKey="third" className="nav-link">Main Courses</Nav.Link>
     </Nav.Item>
     <Nav.Item className='nav-item'>
      <Nav.Link eventKey="third" className="nav-link">Desserts</Nav.Link>
     </Nav.Item>
    </Nav>
   </Col>
   <Col className='my-5 pe-5 ps-5 col-md-9'>
    <Tab.Content>
     <Tab.Pane eventKey="first">
     </Tab.Pane>
     <Tab.Pane eventKey="second">
     </Tab.Pane>
     <Tab.Pane eventKey="third">
     </Tab.Pane>
     <Tab.Pane eventKey="fourth">
     </Tab.Pane>
    </Tab.Content>
   </Col>
  </Row>
 </Tab.Container>)
}

export default InactiveMenu;