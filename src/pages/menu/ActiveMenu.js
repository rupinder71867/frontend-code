import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';

const ActiveMenu = (props) => {
 const catList = props.categoryList.filter(cat => cat.status == true)
 return (<Tab.Container defaultActiveKey="first">
  <Row>
   <Col className='my-5'>
    <Nav variant="pills" className="flex-column">
     {
      catList.map((x, i) =>
       <Nav.Item className='nav-item' key={i}>
        <Nav.Link eventKey={i} className="nav-link">{x.title}</Nav.Link>
       </Nav.Item>
      )
     }

    </Nav>
   </Col>
  </Row>
 </Tab.Container>)
}

export default ActiveMenu;