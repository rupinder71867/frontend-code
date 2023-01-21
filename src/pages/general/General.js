import {Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Client from './Client';
import Profile from './Profile';
import Reservation from './Reservation';
import Gen from './Gen';
const General =() => {
    return (
    <Container fluid>
        <Tab.Container defaultActiveKey="first">
        <Row>
          <Col className='my-5 col-md-3'>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="first" className="nav-link">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="second" className="nav-link">General</Nav.Link>
              </Nav.Item>
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="third" className="nav-link">Client Tag</Nav.Link>
              </Nav.Item>
              <Nav.Item className = 'nav-item'>
                <Nav.Link eventKey="fourth" className="nav-link">Reservation Tag</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className='my-5 pe-5 ps-5 col-md-9'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <Profile/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
               <Gen/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Client/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Reservation/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>

    )
}
export default General;