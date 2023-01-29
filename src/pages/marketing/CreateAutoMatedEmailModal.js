import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Pagination, Container, Dropdown, Table } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateAutoMatedEmailModal = (props) => {
 const { show, handleClose, handleData } = props;
 const [active, setActive] = useState(1);
 const [formArr, setformArr] = useState(1);
 const [validated, setValidated] = useState(false);
 const data = [{ value: 'One', selected: true }, { value: 'Two' }, { value: 'Three' }]
 const [showHourDropDown, setShowHourDropDown] = useState(false);
 const [showDayDropDown, setShowDayDropDown] = useState(false);
 const [showDateTimeDropDown, setDateTimeDropDown] = useState(false);

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

 const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
   event.preventDefault();
   event.stopPropagation();
  } else {
   handleData(formArr);
   event.preventDefault();
   event.stopPropagation();
  }
  setValidated(true);
 }
 const handleRadioHour = (event) => {
  setShowHourDropDown(true);
  setShowDayDropDown(false);
  setDateTimeDropDown(false);


 }
 const handleRadioDay = (event) => {
  setShowHourDropDown(false);
  setDateTimeDropDown(false);
  setShowDayDropDown(true);
 }
 const handleRadioDateTime = (event) => {
  setDateTimeDropDown(true);
  setShowHourDropDown(false);
 }
 return (
  <>
   <Modal className="modal-lg" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>Create AutoMated Email</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group style={{ backgroundColor: 'lightgray', padding: '10px' }} >
       <h4>Email Details</h4>
       <Row>
        <Col>
         <Form.Label style={{ width: '100%' }}>AutoMated Email Name</Form.Label>
         <Form.Text className="text-muted mb-0">Internal name, not visible to guests</Form.Text>
         <Form.Control required type="text" name="emailName" onChange={handleChange} placeholder="AutoMated Email Name" />
        </Col>
        <Col>
         <Form.Label style={{ width: '100%' }}>Reply to address</Form.Label>
         <Form.Text className="text-muted mb-0">Please separated email with comma</Form.Text>
         <Form.Control required type="text" name="replyEmail" onChange={handleChange} placeholder="Reply To Email" />
        </Col>

       </Row>
      </Form.Group>
      <Form.Group style={{ backgroundColor: 'lightgray', padding: '10px' }} className="mt-2" >
       <h4>Audience</h4>
       <Row>
        <Col>
         <Form.Label style={{ width: '100%' }}>Who would you like to send this email</Form.Label>
         <Form.Text className="text-muted mb-0" style={{ fontSize: '12px' }}>The recipient are based on auto tag which can be found here</Form.Text>
         <DropdownMultiselect
          options={["Sender", "Vip"]}
          name="include-user"
          onChange={handleChange}
         />
        </Col>
        <Col>
         <Form.Label style={{ width: '100%' }}>Is there any one you like to exclude this email</Form.Label>
         <Form.Text className="text-muted mb-0" style={{ fontSize: '12px' }}>The execlusion segments include client tags and auto tags</Form.Text>
         <DropdownMultiselect
          options={["BlackList", "BlackLists"]}
          name="execlude-user"
          onChange={handleChange}
         />
        </Col>
       </Row>
      </Form.Group>
      <Form.Group style={{ backgroundColor: 'lightgray', padding: '10px' }} className="mt-2" >
       <h4>Sending Schedule</h4>
       <Row>
        <Col>
         <Form.Text className="text-muted mb-0">After auto tags have been applied, choose when to send the email</Form.Text>
        </Col>
       </Row>
       <Row>
        <Col>
         <Form.Check
          label="Hours after auto tag applied"
          name="group1"
          type="radio"
          id="hours"
          onChange={handleRadioHour}
         />
        </Col>
        <Col>
         {showHourDropDown ? <Form.Select name="hour" onChange={handleChange}>
          <option value='1'>1 Hour</option>
          <option value='2'>2 Hour</option>
          <option value='3'>3 Hour</option>
          <option value='4'>4 Hour</option>
          <option value='5'>5 Hour</option>
          <option value='6'>6 Hour</option>
          <option value='7'>7 Hour</option>
          <option value='8'>8 Hour</option>
          <option value='9'>9 Hour</option>
          <option value='10'>10 Hour</option>
          <option value='1'>11 Hour</option>
          <option value='12'>12 Hour</option>
          <option value='13'>13 Hour</option>
          <option value='14'>14 Hour</option>
          <option value='15'>15 Hour</option>
          <option value='16'>16 Hour</option>
          <option value='17'>17 Hour</option>
          <option value='18'>18 Hour</option>
          <option value='19'>19 Hour</option>
          <option value='20'>20 Hour</option>
          <option value='21'>21 Hour</option>
          <option value='22'>22 Hour</option>
          <option value='23'>23 Hour</option>
         </Form.Select> : ''}
        </Col>
       </Row>
       <Row className="mt-2">
        <Col>
         <Form.Check
          label="Days after auto tag applied"
          name="group1"
          type="radio"
          id="days"
          onChange={handleRadioDay}
         />
        </Col>
        <Col>
         {showDayDropDown ? <Form.Select name="day" onChange={handleChange}>
          <option>Nothing</option>
          <option value='1'>1 Day</option>
          <option value='2'>2 Day</option>
          <option value='3'>3 Day</option>
          <option value='4'>4 Day</option>
          <option value='5'>5 Day</option>
          <option value='6'>6 Day</option>
          <option value='7'>7 Day</option>
          <option value='8'>8 Day</option>
          <option value='9'>9 Day</option>
          <option value='10'>10 Day</option>
          <option value='1'>11 Day</option>
          <option value='12'>12 Day</option>
          <option value='13'>13 Day</option>
          <option value='14'>14 Day</option>
          <option value='15'>15 Day</option>
          <option value='16'>16 Day</option>
          <option value='17'>17 Day</option>
          <option value='18'>18 Day</option>
          <option value='19'>19 Day</option>
          <option value='20'>20 Day</option>
          <option value='21'>21 Day</option>
          <option value='22'>22 Day</option>
          <option value='23'>23 Day</option>
         </Form.Select> : ''}
        </Col>
        {showDateTimeDropDown ? <Col className="col-md-6">
         <Form.Control required type="time" name="time" onChange={handleChange} />
        </Col> : ''}
       </Row>
       <Row className="mt-2">
        <Col>
         <Form.Check
          label="Specify day & time"
          name="group1"
          type="radio"
          id="date-time"
          onChange={handleRadioDateTime}
         />
        </Col>
       </Row>
      </Form.Group>
      <Form.Group style={{ backgroundColor: 'lightgray', padding: '10px' }} className='mt-2'>
       <h4>Email Content</h4>
       <Row>
        <Col>
         <Form.Label style={{ width: '100%' }}>Sender Name</Form.Label>
         <Form.Control required type="text" name="senderName" onChange={handleChange} placeholder="Sender name" />
        </Col>
        <Col>
         <Form.Label style={{ width: '100%' }}>Subject line</Form.Label>
         <Form.Control required type="text" name="subjectLine" onChange={handleChange} placeholder="Subject line" />
        </Col>
       </Row>
       <Row className='mt-2'>
        <Col>
         <Form.Label style={{ width: '100%' }}>Preview Text</Form.Label>
         <Form.Control required type="text" name="previewText" onChange={handleChange} placeholder="Preview text" />
        </Col>
       </Row>
      </Form.Group>
      <Form.Group style={{ backgroundColor: 'lightgray', padding: '10px' }} className='mt-2'>
       <h4>Design email content</h4>
       <Row>
        <CKEditor
         editor={ClassicEditor}
         name='email-content'
         data="<p>Design email content</p>"
         onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
         }}
         onChange={(event, editor) => {
          const data = editor.getData();
          console.log('event=', event);
          if (typeof event.name != 'undefined') {
           setformArr({
            ...formArr,
            ['editorData']: data
           })

          }

          console.log({ event, editor, data });
         }}
         onBlur={(event, editor) => {
          console.log('Blur.', editor);
         }}
         onFocus={(event, editor) => {
          console.log('Focus.', editor);
         }}
        />
       </Row>
      </Form.Group>
      <Form.Group>
       <Row className='mt-5'>
        <Col align="Right">
         <Button type="submit">Save</Button>
        </Col>
       </Row>
      </Form.Group>
     </Form>
    </Modal.Body>
   </Modal>
  </>
 );
}
export default CreateAutoMatedEmailModal;

