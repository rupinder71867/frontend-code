import { Button, Row, Col, Accordion } from 'react-bootstrap';
import React, { useState } from 'react';
import AddTagModal from './AddTagModal';
import AddTag from './AddTag';
const Reservation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tags, setTags] = useState([]);
  const [active, setActive] = useState(1);
  const handleTags = (item) => {
    setTags(tags => [...tags, item]);
    setShow(false)
  }
  const handleSetActive = (e) => {
    console.log('e=', e.target.text)
    setActive(e.target.text)
  }
  return (
    <>
      {show ? <AddTagModal show={show} handleTags={handleTags} handleClose={handleClose} handleShow={handleShow} /> : ''}
      <Row>
        <Col align="center"><h4>Reservation Tags</h4></Col>
      </Row>
      <Row className="border-bottom">
        <Col style={{ fontWeight: 600 }}>
          RESERVATION TAGS
        </Col>
        <Col align="Right"><Button variant="primary" onClick={handleShow}>
          Add Category
        </Button></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Accordion>
            {tags.map((x, i) =>
              <Accordion.Item onClick={handleSetActive} eventKey={i} active={i == active - 1}>
                <Accordion.Header ><Row style={{ color: x.color }}>{x.title}</Row></Accordion.Header>
                <Accordion.Body>
                  <AddTag tagColor={x.color} />
                </Accordion.Body>

              </Accordion.Item>

            )}
          </Accordion>
        </Col>
      </Row>
    </>
  )
}
export default Reservation; 
