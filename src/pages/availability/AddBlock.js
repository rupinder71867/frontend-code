import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
// import Form from 'react-bootstrap/Form';
import './availability.css'
const AddBlock = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center border-bottom"><h4>Add Block</h4></Col>
            </Row>
            <Row className="px-4 gap-1">
                <Col md={5} className="blockReservationPending mt-2 border-end">
                    <Row className="border-bottom">

                        <h4>Blocking tables</h4>
                    </Row>
                    <Row>
                        <Col md={8} className="mt-3">
                            <Form.Select className="py-2 " aria-label="Default select example">
                                <option>Select table to block</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                        </Col>
                    </Row>
                    <Row>
                        <div className="selectTableTxt mt-3">Selected tables</div>
                        <div className="mt-2">No selected Tables</div>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="check"
                                label="Online Reservations"
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="check"
                                label="In-house Reservations"
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <h5 >BLOCK FROM</h5>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>DATE</Form.Label>
                                <Form.Control type="date" defaultVvalue="2017-06-01" />
                            </Form.Group>
                        </Col>
                        <Col md={6} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>TIME</Form.Label>
                                <Form.Control type="time" defaultValue="13:30" />
                            </Form.Group>

                        </Col>


                    </Row>
                    <Row className="mt-2">
                        <h5 >BLOCK UNTIL</h5>
                    </Row>
                    <Row className="py-3">
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>DATE</Form.Label>
                                <Form.Control type="date" defaultVvalue="2017-06-01" />
                            </Form.Group>
                        </Col>
                        <Col md={6} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>TIME</Form.Label>
                                <Form.Control type="time" defaultValue="13:30" />
                            </Form.Group>

                        </Col>


                    </Row>
                    <Row className="mx-3 mb-2">
                        <Button>Block Selected Tables</Button>
                    </Row>
                </Col>
                <Col className="mt-2 blockReservationPending  gap-4">
                    <Row className="pb-3">
                        <h3>Block reservation</h3>
                        <div>Saturday ,31 dec</div>
                    </Row>
                    <Row className="pt-3 border-top ">
                        <h3>Block new reservation</h3>
                    </Row>
                    <Row className="py-3">
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>START BLOCK TIME</Form.Label>
                                <Form.Control type="date" defaultVvalue="2017-06-01" />
                            </Form.Group>
                        </Col>
                        <Col md={6} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>END BLOCK TIME</Form.Label>
                                <Form.Control type="date" defaultValue="2017-06-01" />
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col className="d-flex gap-4">
                        <Form.Check
                            type="checkbox"
                            id="check"
                            label="Online-hours"
                        />
                        <Form.Check
                            type="checkbox"
                            id="check"
                            label="In-house-hours"
                        />
                        <Form.Check
                            type="checkbox"
                            id="check"
                            label="Menus"
                        />
                        </Col>
                        
                    </Row>
                    <Row className="mx-3 py-2">
                        <Button className="py-3 tableButton">Block Selected Tables</Button>
                    </Row>
                    <Row className="bg-light mx-3 py-4 my-2 mt-5">
                        <h3>CURRENTLY BLOCKED RESERVAITONS</h3>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default AddBlock;
