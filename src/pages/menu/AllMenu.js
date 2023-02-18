import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';
import Starter from './Starter';
import Slads from './Slads';
import MainCourse from './MainCourse';
import Desserts from './Desserts';


const AllMenu = (props) => {
 const catList = props.categoryList;
 const handleMenuItem = props.handleMenuItem;
 //handleMenuItem(catList[0].title);

 const handleMenu = (title) => {
  console.log('title', title.target.text);
  handleMenuItem(title.target.text);

 }
 console.log('catList=6', catList);
 return (<Tab.Container defaultActiveKey="first">
  <Row>
   <Col className='my-5'>
    <Nav variant="pills" className="flex-column">
     {
      catList.map((x, i) =>
       <Nav.Item className='nav-item' key={i}>
        <Nav.Link eventKey={i} onClick={handleMenu} className="nav-link">{x.title}</Nav.Link>
       </Nav.Item>
      )
     }
    </Nav>
   </Col>
   {/*<Col className='my-5 pe-5 ps-5 col-md-9'>
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
    </Col>*/}
  </Row>
 </Tab.Container>)
}

export default AllMenu;