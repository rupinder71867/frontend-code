import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
import '..//availability/availability.css'
const AddTables = () => {
    return (
        <Container fluid>
            <Row className="">
                <Col md={12} className="d-flex justify-content-center">
                    <h3 className=""> Tables</h3>
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
                            <Row className="mt-5 mb-5">
                                <Col className="mx-4 my-4" >
                                    <Row className="mt-5">
                                        <Col className="bg-light py-1">
                                            <div>
                                                Table details
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="bg-white border-top py-2">
                                        <Col md={2} className=" d-flex">
                                            <div>
                                                Table Name
                                            </div>

                                        </Col>
                                        <Col className="d-flex ">

                                            <div>
                                                5
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row className="bg-white border-top py-2">
                                        <Col md={2} className="d-flex ">
                                            <div>
                                                Min covers
                                            </div>

                                        </Col>
                                        <Col className="d-flex">
                                            <div>
                                                5
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row className="bg-white border-top py-2">
                                        <Col md={2} className="d-flex">
                                            <div>
                                                Max covers
                                            </div>

                                        </Col>
                                        <Col md={2} className="d-flex ">
                                            <div>
                                                2
                                            </div>

                                        </Col>
                                    </Row>
                                    <Row className="mt-5 align-items-center">
                                        <Col md={2} className="mt-5">
                                            <div className="SelectArea">Select area</div>

                                        </Col>
                                        <Col md={6} className="mt-5">

                                            <Form.Select className="py-3" aria-label="Default select example">
                                                <option className="">Select area</option>
                                                <option className="" value="1"><div>One</div></option>
                                                <option className="" value="2">Two</option>
                                                <option className="" value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5 px-5 mx-5">
                                        <Col className="mt-5">
                                            <NavLink className="SelectArea">Save</NavLink>
                                        </Col>
                                        <Col className="mt-5 d-flex justify-content-end">
                                            <NavLink className="SelectArea">Cancel</NavLink>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}
export default AddTables;
