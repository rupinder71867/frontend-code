import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../../App.css'
import { validEmail, validPassword } from '../Rejex.js';
const MarketingInformation = () => {

  const [values, setValues] = useState({
    address: "",
    city: "",
    country: "",
    website: "",
    reservation: "",

  });
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });

  };
  const formdata = [{
    basicinformation: {
      address: values.address,
      city: values.city,
    },
  }]
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Send times from automated reservation summary email of all reservation in an upcomming shifts
    </Tooltip>
  );

  return (
    <Row className="section-container" style={{ backgroundColor: 'grey', border: '1px solid', borderRadius: '2px' }}>
      <Col>
        <h4>Marketing Information</h4>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <h5>Send Email As</h5>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Sender Name</Form.Label>
              <Form.Control type="text" placeholder="Sender Name" required />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Sender Role</Form.Label>
              <Form.Control type="text" placeholder="Sender Role" required />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" placeholder="Email Address" required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label>Send From User</Form.Label>
              <Form.Select>
                <option>Harish</option>
                <option>Harish2</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <Form.Label>Reservation Summary Email</Form.Label>
              </OverlayTrigger>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group as={Col} md="4" className="mb-3">
              <Form.Label></Form.Label>
              <Form.Check type="switch" id="custom-switch" label="Every day" className="mt-3" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Guest Blocking Notification</Form.Label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6" className="mt-2">
              <Form.Check type="switch" id="custom-switch" label="Email" className="mt-3" />
              <Form.Check type="switch" id="custom-switch" label="Sms" className="mt-3" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" className='text-end'>
              <Button type="submit">Save</Button>
            </Form.Group>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
export default MarketingInformation; 
