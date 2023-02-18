import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
var checklogin =localStorage.getItem('uname') ? localStorage.getItem('uname') : '';
console.log(checklogin);
function Header() {
  const navigate = useNavigate();
  const Customlogout= (event) => {
    localStorage.removeItem('uname');
    localStorage.removeItem('upass');
    navigate("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Brand href="#"  onClick={Customlogout} >Logout</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;