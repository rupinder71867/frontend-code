import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import PeopleListing from './PeopleListing';
import ServerList from './ServerList';
import Booked from './Booked';

const People = () => {
    return (
        <Container fluid>
            <Row className="mt-3">
                <Col>
                    <h4>People</h4>
                </Col>
            </Row>
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col className='my-5 col-md-3'>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className='nav-item'>
                                <Nav.Link eventKey="first" className="nav-link">Add Permission</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link eventKey="second" className="nav-link">Add Server</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link eventKey="third" className="nav-link">Booked By</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className='my-5 pe-5 ps-5 col-md-9'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <PeopleListing />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ServerList />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Booked />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container >
    )
}
export default People;