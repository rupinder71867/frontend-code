import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import AutoMatedMessage from './AutoMatedMessage';
import AutoTagEmail from './AutoTagEmail';
import TrackingLink from './TrackingLink';

const MarketingAutomation = () => {
 return (
  <Container fluid>
   <Row className="mt-3">
    <Col>
     <h4>Marketing Automation</h4>
    </Col>
   </Row>
   <Tab.Container defaultActiveKey="first">
    <Row>
     <Col className='my-5 col-md-3'>
      <Nav variant="pills" className="flex-column">
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="first" className="nav-link">Auto Tag</Nav.Link>
       </Nav.Item>
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="second" className="nav-link">Automated Messages</Nav.Link>
       </Nav.Item>
       <Nav.Item className='nav-item'>
        <Nav.Link eventKey="third" className="nav-link">Tracking link</Nav.Link>
       </Nav.Item>
      </Nav>
     </Col>
     <Col className='my-5 pe-5 ps-5 col-md-9'>
      <Tab.Content>
       <Tab.Pane eventKey="first">
        <AutoTagEmail />
       </Tab.Pane>
       <Tab.Pane eventKey="second">
        <AutoMatedMessage />
       </Tab.Pane>
       <Tab.Pane eventKey="third">
        <TrackingLink />
       </Tab.Pane>
       <Tab.Pane eventKey="fourth">
       </Tab.Pane>
      </Tab.Content>
     </Col>
    </Row>
   </Tab.Container>
  </Container>

 )
}
export default MarketingAutomation;