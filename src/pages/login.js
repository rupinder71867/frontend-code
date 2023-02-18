import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";


function Login() {

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

    const submitLoginForm = (event) => {
      const form = event.currentTarget;
      let uname = form.username.value;
      let upass = form.password.value;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
        console.log(uname);
        console.log(upass);
        if(uname == 'superadmin@gmail.com' && upass == '12345'){
          localStorage.setItem('uname', uname);
          localStorage.setItem('upass', upass);
          setValidated(true); 
          navigate("/home");
        }else{
          alert('error Not valid credentials!');
          event.preventDefault();
          event.stopPropagation(); 
        }
    }
  return (
    <Container className="my-5">
    <h2 className="fw-normal mb-5">Login</h2>
    <Row>
        <Col md={{span: 6}}>
            <Form noValidate validated={validated} id="loginForm" onSubmit={submitLoginForm}>
                <FormGroup className="mb-3">
                    <FormLabel htmlFor={'login-username'}>Username</FormLabel>
                    <input type={'text'} className="form-control" id={'login-username'} name="username" required />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                    <input type={'password'} className="form-control" id={'login-password'} name="password" required />
                </FormGroup>
                <Button type="submit" className="btn-success mt-2" id="login-btn" >Login</Button>
            </Form>
        </Col>
    </Row>
</Container>
  );
}

export default Login;