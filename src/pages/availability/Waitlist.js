import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddOnlineInventoryModal from './AddOnlineInventoryModal';

const Waitlist = () => {
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
    return (
        <>{show ? <AddOnlineInventoryModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
            <Row>
                <Col align="center"><h4>WaitList</h4></Col>
            </Row>
            <Row className="border-bottom">
                <Col style={{ fontWeight: 600 }}>
                    WaitList
                </Col>
                <Col align="Right">
                    <Button variant="primary" onClick={handleShow}>Add WaitList</Button>
                </Col>
            </Row>
            <Row>

            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shiftList.map((x, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{x.shiftTitle}</td>
                                <td>Active</td>
                                <td>{x.sdate}</td>
                            </tr>

                        )}
                    </tbody>
                </Table>

            </Row>
        </>
    )
}
export default Waitlist;