import { Button, Row, Col, Container, Table, Tab, Tabs, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FaStripe } from "react-icons/fa";

const Integration = (props) => {
  return (
    <Container>
      <Row border-bottom mt-4>
        <Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="home" title="My integration">
            </Tab>
            <Tab eventKey="profile" title="All integration">
              <Row className='mt-2'>
                <Col>
                  <Button>All(22)</Button>
                </Col>
                <Col>
                  <Button>POS(11)</Button>
                </Col>
                <Col>
                  <Button>Printer(1)</Button>
                </Col>
                <Col style={{ marginRight: '10%' }}>
                  <Button>Payment(10)</Button>
                </Col>
                <Col className='col-md-4'>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" name='search' placeholder='Search' />
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <h5>Payment Provider</h5>
      </Row>
      <Row>
        <Col className='paymentItem'><Row><h5>Stripe</h5></Row><Row><h6>Payment Free</h6></Row></Col>
        <Col className='paymentItem'><Row><h5>Checkout</h5></Row><Row><h6>Payment Free</h6></Row></Col>
        <Col className='paymentItem'><Row><h5>Lyzipay</h5></Row><Row><h6>Payment Free</h6></Row></Col>
        <Col className='paymentItem'><Row><h5>Square</h5></Row><Row><h6>Payment Free</h6></Row></Col>
      </Row >
      <Row className='mt-4'>
        <Col className='paymentItem'><Row><h5>Sum Up</h5></Row><Row><h6>Payment Free</h6></Row></Col>
        <Col className='paymentItem'><Row><h5>STC Pay</h5></Row><Row><h6>Payment Free</h6></Row></Col>
        <Col className='paymentItem'><Row><h5>MaximumMobile</h5></Row><Row><h6>Payment Free</h6></Row></Col>
        <Col className='paymentItem'><Row><h5>IsBank</h5></Row><Row><h6>Payment Free</h6></Row></Col>
      </Row>

    </Container >
  )
}

export default Integration;
