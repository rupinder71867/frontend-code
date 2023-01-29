import { Button, Row, Col, Accordion } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import CreateTableGroupModal from './CreateTableGroupModal';
import { FaTrashAlt } from "react-icons/fa";


const TableGrouping = (props) => {
 const { roomList, tablesList } = props;
 console.log('tableList8=', tablesList);
 const [show, setShow] = useState(false);
 const [groupList, setGroupList] = useState([]);
 const [selectedTables, setSelectedTables] = useState([]);

 const handleClose = () => {
  setShow(false);
 }
 const handleShow = () => setShow(true);

 const removeGroup = (arrIndex) => {

  setGroupList([
   ...groupList.slice(0, arrIndex),
   ...groupList.slice(arrIndex + 1)
  ]);


 }
 const handleTableGroup = (group) => {
  setGroupList(groupList => [...groupList, group]);
  setShow(false);

 }
 return (
  <>
   {show ? <CreateTableGroupModal tablesList={tablesList} roomList={roomList} show={show} handleTableGroup={handleTableGroup} handleClose={handleClose} handleShow={handleShow} /> : ''}

   <Row className="border-bottom">
    <Col style={{ fontWeight: 600 }}>
     Table Groups
    </Col>
    <Col align="Right">
     <Button variant="primary" onClick={handleShow}>Create Group</Button>
    </Col>
   </Row>

   <Row className='mt-2'>
    <Col>
     <Accordion>

      {
       groupList.map((x, i) =>
        <Accordion.Item key={i} eventKey={i}>
         <Accordion.Header>
          <Col className="col-md-10">{x.formArr.title}</Col>
          <Col className='col-md-1 pad-left'><FaTrashAlt onClick={() => removeGroup(i)} /></Col>

         </Accordion.Header>
         <Accordion.Body>
          <Row style={{ backgroundColor: "lightgray", textAlign: 'center', padding: '5px' }}>
           <Col>
            <h4 >{x.formArr.room}</h4>
           </Col>

          </Row>
          <Row className="mt-2">
           <Col className="col-md-2">
            {
             x.table.map((x, i) => <h6 style={{ backgroundColor: "#b60144", textAlign: 'center', padding: '10px', borderRadius: '10px' }} key={i}>{tablesList[x].title}</h6>
             )
            }
           </Col>
          </Row>
         </Accordion.Body>
        </Accordion.Item>
       )
      }
     </Accordion>

    </Col>
   </Row>
  </>

 )
}
export default TableGrouping; 