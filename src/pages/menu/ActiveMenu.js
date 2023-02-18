import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';

const ActiveMenu = () => {
 return (<Tab.Container defaultActiveKey="first">
  <Row>
   <Col className='my-5 col-md-3'>
    <Nav variant="pills" className="flex-column">
     <Nav.Item className='nav-item'>
      <Nav.Link eventKey="first" className="nav-link">Starters</Nav.Link>
     </Nav.Item>
     <Nav.Item className='nav-item'>
      <Nav.Link eventKey="second" className="nav-link">Slads</Nav.Link>
     </Nav.Item>
    </Nav>
   </Col>
   <Col className='my-5 pe-5 ps-5 col-md-9'>
    <Tab.Content>
     <Tab.Pane eventKey="first">
     </Tab.Pane>
     <Tab.Pane eventKey="second">
     </Tab.Pane>
    </Tab.Content>
   </Col>
  </Row>
 </Tab.Container>)
}

export default ActiveMenu;