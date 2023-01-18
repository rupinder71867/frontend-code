import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../App.css'
import { validEmail, validPassword } from './Rejex.js';
export default function FormExample() {

    const [values, setValues] = useState({
        address: "",
        city: "",
        country: "",
        website: "",
        reservation: "",
       
      });

   
    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
      
      };
      const formdata = [{
        basicinformation:{
            address:values.address,
            city:values.city,
        },
      }]
      console.log("mmmmmmmmmmmmmmmm",formdata)
    







    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col className='my-5 pe-5 ps-5 col-md-10 bg-light'>
                <div className = "page-header mt-5">
                    <h4>Venu Information</h4>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="address"
                                    placeholder="Address" 
                                    onChange={handleChange("address")}
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Please enter valid data.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    onChange={handleChange("city")}
                                    placeholder="City"                                    
                                />    
                                 <Form.Control.Feedback type="invalid">
                                    Please enter valid data.
                                </Form.Control.Feedback>                            
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="country"                                    
                                />  
                                 <Form.Control.Feedback type="invalid">
                                    Please enter valid data.
                                </Form.Control.Feedback>                              
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Website</Form.Label>
                                <Form.Control onChange={handleChange} type="text" placeholder="https://WWW.servername.com" required />  
                                <Form.Control.Feedback type="invalid">
                                    Please enter valid webiste url.
                                </Form.Control.Feedback>                             
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Reservation Widget Link</Form.Label>
                                <Form.Control onChange={handleChange} type="text" placeholder="https://WWW.servername.com" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter valid reservation widget link.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <h4>Social Media Links</h4> 
                        <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom05">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control type="text" placeholder="https://" required />
                                        <Form.Control.Feedback type="invalid">
                                        Please enter valid facebook link.
                                    </Form.Control.Feedback>                               
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom06">
                                    <Form.Label>Instagram</Form.Label>
                                    <Form.Control type="text" placeholder="https://" required />
                                    <Form.Control.Feedback type="invalid">
                                    Please enter valid instagram link.
                                </Form.Control.Feedback>                              
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom07">
                                    <Form.Label>Snapchat</Form.Label>
                                    <Form.Control type="text" placeholder="https://"  required/> 
                                    <Form.Control.Feedback type="invalid">
                                            Please enter valid snapchat link.
                                    </Form.Control.Feedback>                              
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom08">
                                    <Form.Label>Twitter</Form.Label>
                                    <Form.Control type="text" placeholder="https:/" required />
                                    <Form.Control.Feedback type="invalid">
                                      Please enter valid twitter data.
                                   </Form.Control.Feedback>
                                </Form.Group>                            
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col} md="12" className='text-end'>
                            <Button type="submit">Submit form</Button>
                            </Form.Group>
                        </Row>
                        
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
