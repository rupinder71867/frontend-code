import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
// import Form from 'react-bootstrap/Form';
import './availability.css'
const Shifts = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3} className="border-end bg-light sidebar1 ">
                    <Row className="gap-2 justify-content-center">
                        <NavLink className="btn menuBg py-3">Dinner</NavLink>
                        {/* <NavLink className="btn menuBg py-3">Dinner</NavLink> */}
                        {/* <Col md={12} className="py-4 mt-2 d-flex bg-light justify-content-center">
                            <div >Dinner</div>
                        </Col>
                        <Col md={12} className="py-4 mt-2 d-flex bg-light justify-content-center">
                            <div >Dinner</div>
                        </Col>
                        <Col md={12} className="py-4 mt-2 d-flex bg-light justify-content-center">
                            <div >Dinner</div>
                        </Col>
                        <Col md={12} className="py-4 mt-2 d-flex bg-light justify-content-center">
                            <div >Dinner</div>
                        </Col>
                        <Col md={12} className="py-4 mt-2 d-flex bg-light justify-content-center">
                            <div >Dinner</div>
                        </Col> */}

                        <NavLink className="menuBg btn py-3 addShifts">Add new shifts</NavLink>
                    </Row>
                    {/* <Row className="addShifts"> */}
                    {/* <NavLink className="bg-danger btn">Add shifts</NavLink> */}

                    {/* </Row> */}
                </Col>

                <Col md={9} className="bg-light">
                    <Row>
                        <Col className="px-4">
                            <Row className="py-3">
                                <Col className="d-flex justify-content-center">
                                    <div className="txt"> Shifts</div>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Form.Check
                                        type="checkbox"
                                        id="check"
                                        label="SHIFT ACTIVE"
                                    />
                                </Col>
                            </Row>
                            <Row  className="py-3">
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>START DATE</Form.Label>
                                        <Form.Control type="date" defaultVvalue="2017-06-01" />
                                    </Form.Group>
                                </Col>
                                <Col md={6} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>END DATE*</Form.Label>
                                        <Form.Control type="date" defaultValue="2017-06-01" />
                                    </Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        id="check"
                                        label="continue indefinite"
                                    />
                                </Col>


                            </Row>
                            <Row  className="py-3">
                                <Col>
                                    <Pagination size='lg'>


                                        <Pagination.Item active>Sun</Pagination.Item>
                                        <Pagination.Item>Mon</Pagination.Item>
                                        <Pagination.Item active>Tue</Pagination.Item>
                                        <Pagination.Item>Wed</Pagination.Item>
                                        <Pagination.Item>Thu</Pagination.Item>
                                        <Pagination.Item>Fri</Pagination.Item>
                                        <Pagination.Item>Sat</Pagination.Item>
                                    </Pagination>

                                </Col>
                            </Row>
                            <Row>

                                <Col className="mt-3" md={6} >
                                    <Form.Select className="py-3 " aria-label="Default select example">
                                        <option>FIRST SEATING</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                </Col>
                                <Col className="mt-3" md={6} >
                                    <Form.Select className="py-3" aria-label="Default select example">
                                        <option>LAST SEATING</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col className="mt-3" md={6} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>MIN COVERS PERRESERVATION</Form.Label>
                                        <Form.Control className="py-3" type="text" defaultValue="1" />
                                    </Form.Group>

                                </Col>
                                <Col className="mt-3" md={6} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>MAX COVERS PERRESERVATION</Form.Label>
                                        <Form.Control className="py-3" type="text" defaultValue="1" />
                                    </Form.Group>

                                </Col>
                                <Col className="mt-5" md={6} >
                                    <Form.Select className="py-3" aria-label="Default select example">
                                        <option>INTERVAL</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col className="mt-3" md={6} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>PACING</Form.Label>
                                        <Form.Control className="py-3" type="text" defaultValue="0" />
                                    </Form.Group>

                                </Col>
                                <Col className="mt-3" md={6} >
                                    <Form.Select className="py-3" aria-label="Default select example">
                                        <option>DURATION</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Shifts;
