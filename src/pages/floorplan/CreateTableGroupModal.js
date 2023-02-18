import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination } from 'react-bootstrap';

const CreateTableGroupModal = (props) => {
 const { show, handleClose, handleTableGroup, tablesList, roomList } = props;
 console.log('roomList=', roomList)
 console.log('tableList=', tablesList)

 const [active, setActive] = useState(1);
 const [formArr, setformArr] = useState(1);
 const [validated, setValidated] = useState(false);
 const [tableGroupList, setTableGroupList] = useState([]);
 const [selectedTable, setSelectedTable] = useState([]);

 const handleSetActive = (e) => {
  setActive(e.target.text)
 }

 const handleChange = evt => {
  const name = evt.target.name;
  const value = evt.target.value
  setformArr({
   ...formArr,
   [name]: value
  })
 }


 const handleSelectedTable = (event) => {
  var permissions_array = [...selectedTable];
  if (event.target.checked) {
   permissions_array = [...selectedTable, event.target.value];
  } else {
   permissions_array.splice(selectedTable.indexOf(event.target.value), 1);
  }
  setSelectedTable(permissions_array);

 };

 const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
   event.preventDefault();
   event.stopPropagation();
  } else {
   const data = [];
   data['formArr'] = formArr;
   data['table'] = selectedTable;
   handleTableGroup(data);
   event.preventDefault();
   event.stopPropagation();
  }

  setValidated(true);
 }

 return (
  <>
   <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Create Table Group</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
       <Col>
        <Form.Label>Title</Form.Label>
        <Form.Control required type="text" name="title" onChange={handleChange} placeholder="Enter title" />
       </Col>
      </Row>
      <Row className='mt-2'>
       <Col>
        <Form.Label>Select Room</Form.Label>
        <Form.Select name="room" onChange={handleChange} required>
         <option></option>
         {
          roomList.map((x, i) =>
           <option key={i}>{x.title}</option>
          )
         }
        </Form.Select>

       </Col>
      </Row>

      <Row className='mt-2'>
       <Form.Label>Select Tables</Form.Label>
       {
        tablesList.map((x, i) =>
         <Col>
          <Form.Check
           type='checkbox'
           id={i}
           value={i}
           onChange={handleSelectedTable}
           label={x.title}
          />

         </Col>

        )
       }

      </Row>
      <Row className='mt-2'>
       <Col align="Right">
        <Button type="submit">Save</Button>
       </Col>
      </Row>
     </Form>
    </Modal.Body>
   </Modal>
  </>
 );
}
export default CreateTableGroupModal;

