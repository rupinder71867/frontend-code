import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
//import '..//availability/availability.css'
const Permissions = () => {
    return (
        <Container fluid>
            <Row className="">
                <Col md={12} className="d-flex justify-content-center">
                    <h3 className=""> Permission</h3>
                </Col>
            </Row>
            <Row className="ms-2 mt-4 mb-4">
                <Col md={4} className="border-end border-start sidebar1 ">
                    <Row className="gap-2 justify-content-center  ms-2 me-2">
                        <NavLink className="btn menuBg py-4">5</NavLink>
                        <NavLink className="btn menuBg py-4">M22</NavLink>
                        <NavLink className="btn menuBg py-4">M11</NavLink>
                        <NavLink className="menuBg btn py-4 saveTable">Save</NavLink>
                    </Row>

                </Col>

                <Col md={8} className="">
                    <Row className="justify-content-end">
                        <Col md={11} className="mx-3 tabelRight">
                            <Row className="mt-5 mb-5 justify-content-center">
                                <Col md={6} className="mx-4 my-4" >
                                    <Form.Group className="my-3 align-items-center" as={Row} controlId="validationCustom02">
                                        <Form.Label column md="3">Name</Form.Label>
                                        <Col md={8} >

                                            <Form.Control className="py-3"
                                                required
                                                type="text"

                                                placeholder="Enter name"
                                            />
                                        </Col>

                                        <Form.Control.Feedback type="invalid">
                                            Please enter valid data.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="my-3 align-items-center" as={Row} controlId="validationCustom02">
                                        <Form.Label column md="3">Email</Form.Label>
                                        <Col md={8}>

                                            <Form.Control
                                                required
                                                type="text"
                                                className="py-3"
                                                placeholder="City"
                                            />
                                        </Col>

                                        <Form.Control.Feedback type="invalid">
                                            Please enter valid data.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="my-3 align-items-center" as={Row} controlId="validationCustom02">
                                        <Form.Label column md="3">Role</Form.Label>
                                        <Col md={8}>

                                            <Form.Control
                                                required
                                                type="text"
                                                className="py-3"
                                                placeholder="City"
                                            />
                                        </Col>

                                        <Form.Control.Feedback type="invalid">
                                            Please enter valid data.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="my-3 align-items-center" as={Row} controlId="validationCustom02">
                                        <Form.Label column md="3">Password</Form.Label>
                                        <Col md={8}>

                                            <Form.Control
                                                required
                                                type="text"
                                                className="py-3"
                                                placeholder="City"
                                            />
                                        </Col>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter valid data.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}
export default Permissions;
