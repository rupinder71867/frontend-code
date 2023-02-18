import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../../App.css'
import { validEmail, validPassword } from '../Rejex.js';
const Profile = () => {

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
        basicinformation: {
            address: values.address,
            city: values.city,
        },
    }]
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
        <Row style={{ backgroundColor: 'grey', border: '1px solid', borderRadius: '2px' }}>
            <Col>
                <h4>Profile Information</h4>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control
                                required
                                type="file"
                                name="profile-img"
                                onChange={handleChange("fname")}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="fname"
                                placeholder="Enter First Name"
                                onChange={handleChange("fname")}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="city"
                                placeholder="city"
                                onChange={handleChange("city")}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange("state")}
                                placeholder="State"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                                placeholder="Country"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                                placeholder="Mobile Number"
                            />
                        </Form.Group>
                    </Row>
                    <h4>Social Media Links</h4>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control type="text" placeholder="https://" required />

                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control type="text" placeholder="https://" required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom07">
                            <Form.Label>Snapchat</Form.Label>
                            <Form.Control type="text" placeholder="https://" required />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control type="text" placeholder="https:/" required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" className='text-end'>
                            <Button type="submit">Save</Button>
                        </Form.Group>
                    </Row>

                </Form>
            </Col>
        </Row>
    );
}
export default Profile; 
