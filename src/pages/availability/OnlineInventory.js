import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import AddOnlineInventoryModal from './AddOnlineInventoryModal';
import { FaTrashAlt } from "react-icons/fa";


const OnlineInventory = () => {
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
        <>{show ? <AddOnlineInventoryModal handleData={handleData} show={show} handleClose={handleClose} /> : ''}
            <Row>
                <Col align="center"><h4>Online Inventory</h4></Col>
            </Row>
            <Row className="border-bottom">
                <Col style={{ fontWeight: 600 }}>
                    Online Inventory
                </Col>
                <Col align="Right">
                    <Button variant="primary" onClick={handleShow}>Add OnLine Inventory</Button>
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
export default OnlineInventory;