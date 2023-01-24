import { Button, Row, Col, Accordion } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddTableModal from './AddTableModal';

const TableListing = (props) => {
  const { handleTablesList, areaList } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  useEffect(() => {
    handleTablesList(tables);
  });
  const handleShow = () => setShow(true);
  const [tables, setTables] = useState([]);
  const [active, setActive] = useState(1);
  const handleTables = (item) => {
    setTables(tables => [...tables, item]);
    setShow(false);
  }
  const handleSetActive = (e) => {
    setActive(e.target.text)
  }
  const removeTable = (arrIndex) => {
    setTables([
      ...tables.slice(0, arrIndex),
      ...tables.slice(arrIndex + 1)
    ]);

  }

  return (
    <>
      {show ? <AddTableModal areaList={areaList} show={show} handleTables={handleTables} handleClose={handleClose} handleShow={handleShow} /> : ''}
      <Row>
        <Col align="center"><h4>Tables</h4></Col>
      </Row>
      <Row className="border-bottom">
        <Col style={{ fontWeight: 600 }}>
          Tables
        </Col>
        <Col align="Right">
          <Button variant="primary" onClick={handleShow}>Add Table</Button>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Accordion flush={true}>

            {tables.map((x, i) =>
              <Accordion.Item onClick={handleSetActive} eventKey={i} key={i}>
                <Accordion.Header>
                  <Col className="col-md-10">{x.title}</Col>
                  <Col className='col-md-1 pad-left'><FaTrashAlt onClick={() => removeTable(i)} /></Col>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col>Min Cover: {x.minCover}</Col>
                    <Col>Max Cover: {x.maxCover}</Col>
                    <Col>Area: {x.area}</Col>
                  </Row>

                </Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>

        </Col>
      </Row>
    </>


  )
}

export default TableListing;
