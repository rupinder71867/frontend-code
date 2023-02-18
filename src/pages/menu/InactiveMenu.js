import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';

const InactiveMenu = (props) => {
 const catList = props.categoryList.filter(cat => cat.status == false)

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
   {/*<Col className='my-5 pe-5 ps-5 col-md-9'>
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
    </Col>*/}
  </Row>
 </Tab.Container>)
}
export default InactiveMenu;