import { Button, Row, Col, Accordion} from 'react-bootstrap';
import React, { useState } from 'react';
import {FaTrashAlt} from "react-icons/fa";



import AddRoomModal from './AddRoomModal';

const RoomListing =() => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const [rooms, setRooms] = useState([]);
 const [active, setActive] = useState(1);
 const handleRooms = (item) => {
     setRooms(rooms => [...rooms,item] );
     setShow(false)
 }
 const handleSetActive =(e) => {
     setActive(e.target.text)
 }
 const removeRoom = (arrIndex) => {
  setRooms([
      ...rooms.slice(0, arrIndex),
      ...rooms.slice(arrIndex + 1)
    ]);

}

 return (
   <>
     {show?<AddRoomModal show={show} handleRooms={handleRooms} handleClose={handleClose} handleShow={handleShow}/> :''}
     <Row>
       <Col align="center"><h4>Rooms</h4></Col>
     </Row>
     <Row className="border-bottom">
          <Col style={{fontWeight:600}}>
             Rooms
          </Col>
          <Col align ="Right">
           <Button variant="primary" onClick={handleShow}>Add Room</Button>
          </Col>
     </Row>
     <Row className='mt-2'>
     <Col>
     <Accordion>

     {rooms.map((x, i) =>
          <Accordion.Item onClick ={handleSetActive} eventKey={i} active={i == active-1}>
             <Accordion.Header>
              <Col className="col-md-10">{x.title}</Col>
              <Col className="col-md-1 pad-left"><FaTrashAlt onClick={()=>removeRoom(i)}/></Col>
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

export default RoomListing;
