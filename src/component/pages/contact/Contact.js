import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-description">
        
      </div>
      <div className="contact-form">
      <Row className="w-100 " >
        <Col lg={6} sm={12} >
          <FormGroup className="contact">
            <h2>Get In Touch</h2>
            <Label>
              Name        
            </Label>
            <Input type="text" placeholder="Enter your name" />
            <Label>
              Email*
            </Label>
              <Input type="email" placeholder="Enter your email address" />
              <Label>
              Message
            </Label>
              <Input type="textarea" placeholder="Enter your message" />  
            <Button className="w-100 mt-3">Send message</Button>
          </FormGroup>

        </Col>
        <Col lg={6} sm={12}>
        <div className="getInTouch">
          <h2>FAQs</h2>
          <span></span>
        </div>
          
        </Col>
      </Row>
    </div>
    </>
    
  );
}
