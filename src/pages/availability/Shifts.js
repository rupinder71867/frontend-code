import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AddShiftModal from './AddShiftModal';

const Shifts = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    return (
        <>{show ? <AddShiftModal show={show} handleClose={handleClose} /> : ''}
            <Row>
                <Col align="center"><h4>Shifts</h4></Col>
            </Row>
            <Row className="border-bottom">
                <Col style={{ fontWeight: 600 }}>
                    Shifts
                </Col>
                <Col align="Right">
                    <Button variant="primary" onClick={handleShow}>Add Shift</Button>
                </Col>
            </Row>
        </>
    )
}
export default Shifts;