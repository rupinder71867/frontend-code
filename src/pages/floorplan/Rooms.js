import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
// import Form from 'react-bootstrap/Form';
import '..//availability/availability.css'
const Rooms = () => {
    return (
        <Container fluid>
            <Row className="ms-2 mt-4 mb-4">
                <Col md={4} className="border-end border-start sidebar1 ">
                    <Row className="gap-2 justify-content-center  ms-2 me-2">
                        <NavLink className="btn menuBg py-4">Smoking area</NavLink>
                        <NavLink className="btn menuBg py-4">Inside area</NavLink>
                        <NavLink className="btn menuBg py-4">Outside area</NavLink>
                        <NavLink className="btn menuBg py-4">Room name</NavLink>
                        <NavLink className="menuBg btn py-4 addShifts">Save</NavLink>
                    </Row>

                </Col>

                <Col md={8} className="">
                    <Row className="">
                        <Col className="px-4">
                            <Row className="">
                                <Col md={8} className="d-flex justify-content-center">
                                    <h3 className=""> Area</h3>
                                </Col>
                               
                            </Row>                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Rooms;
