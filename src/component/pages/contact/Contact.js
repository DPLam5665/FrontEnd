import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-form container-fluid">
      <Row>
        <Col lg={6} sm={12}>
          <FormGroup className="contact">
            <h1>Send contact</h1>
            <Label>
              Email         
            </Label>
            <Input type="text" placeholder="Email address" />
            <Label>
              Password
              <br />
              <Input type="password" placeholder="password" />
            </Label>
          </FormGroup>
        </Col>
        <Col lg={6} sm={12}>
        <div className="getInTouch">
          <h1>Get in touch</h1>
        </div>
          
        </Col>
      </Row>
    </div>
  );
}
