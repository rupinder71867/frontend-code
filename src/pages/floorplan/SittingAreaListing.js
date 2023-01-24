import { Button, Row, Col, Accordion } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import AddAreaModal from './AddAreaModal';

const SittingAreaListing = (props) => {
  const { handleAreaList } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const [areas, setAreas] = useState([]);
  const [active, setActive] = useState(1);
  const handleAreas = (item) => {
    setAreas(areas => [...areas, item]);
    setShow(false)

  }
  useEffect(() => {
    handleAreaList(areas);
  });

  const handleSetActive = (e) => {
    setActive(e.target.text)
  }
  const removeArea = (arrIndex) => {
    setAreas([
      ...areas.slice(0, arrIndex),
      ...areas.slice(arrIndex + 1)
    ]);

  }

  return (
    <>
      {show ? <AddAreaModal show={show} handleAreas={handleAreas} handleClose={handleClose} handleShow={handleShow} /> : ''}
      <Row>
        <Col align="center"><h4>Area</h4></Col>
      </Row>
      <Row className="border-bottom">
        <Col style={{ fontWeight: 600 }}>
          Area
        </Col>
        <Col align="Right">
          <Button variant="primary" onClick={handleShow}>Add Area</Button>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <Accordion flush={true}>
            {areas.map((x, i) =>
              <Accordion.Item onClick={handleSetActive} key={i} eventKey={i}>
                <Accordion.Header>
                  <Col className="col-md-10">{x.title}</Col>
                  <Col className="col-md-1 pad-left"><FaTrashAlt onClick={() => removeArea(i)} /></Col>
                </Accordion.Header>
                <Accordion.Body>
                  {x.descriptions}
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>
        </Col>
      </Row>
    </>


  )
}
export default SittingAreaListing; 
