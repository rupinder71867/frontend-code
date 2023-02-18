import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import Starter from './Starter';
import Slads from './Slads';
import MainCourse from './MainCourse';
import Desserts from './Desserts';


const AllMenu = () => {
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
     <Nav.Item className='nav-item'>
      <Nav.Link eventKey="third" className="nav-link">Main Courses</Nav.Link>
     </Nav.Item>
     <Nav.Item className='nav-item'>
      <Nav.Link eventKey="fourth" className="nav-link">Desserts</Nav.Link>
     </Nav.Item>
    </Nav>
   </Col>
   <Col className='my-5 pe-5 ps-5 col-md-9'>
    <Tab.Content>
     <Tab.Pane eventKey="first">
      <Starter />
     </Tab.Pane>
     <Tab.Pane eventKey="second">
      <Slads />
     </Tab.Pane>
     <Tab.Pane eventKey="third">
      <MainCourse />
     </Tab.Pane>
     <Tab.Pane eventKey="fourth">
      <Desserts />
     </Tab.Pane>
    </Tab.Content>
   </Col>
  </Row>
 </Tab.Container>)
}

export default AllMenu;