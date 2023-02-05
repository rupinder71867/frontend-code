import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddShiftModal from './AddShiftModal';
import { FaTrashAlt } from "react-icons/fa";


const Shifts = () => {
    const [show, setShow] = useState(false);
    const [shiftList, setShiftList] = useState([]);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleData = (item) => {
        setShiftList(shiftList => [...shiftList, item]);
        setShow(false);

    }
    const removeTable = (arrIndex) => {
        setShiftList([
            ...shiftList.slice(0, arrIndex),
            ...shiftList.slice(arrIndex + 1)
        ]);

    }
    return (
        <>{show ? <AddShiftModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
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
            <Row>

            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Shift Title</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shiftList.map((x, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{x.shiftTitle}</td>
                                <td>Active</td>
                                <td>{x.sdate}</td>
                                <td><FaTrashAlt onClick={() => removeTable(i)} /></td>
                            </tr>

                        )}
                    </tbody>
                </Table>

            </Row>
        </>
    )
}
export default Shifts;