import { Container, Row, Col, Tab, Nav, Link, Button } from 'react-bootstrap';
import Client from './Client';
import Profile from './Profile';
import Reservation from './Reservation';
import AddVenu from "./AddVenu";
import MarketingInformation from './MarketingInformation';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";



const General = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate('/');
  }
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col>
          <h4>General</h4>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col className='my-5 col-md-3'>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="first" className="nav-link">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="second" className="nav-link">Venu</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="third" className="nav-link">Client Tag</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link eventKey="fourth" className="nav-link">Reservation Tag</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button onClick={redirectHome} style={{ width: '100%' }}><FaArrowLeft /> Back</Button>

          </Col>
          <Col className='my-5 pe-5 ps-5 col-md-9'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AddVenu />
                <MarketingInformation />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Client />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Reservation />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>

  )
}
export default General;