import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css'
export default function About () {
  return (
    <div className='about'>
    <Container >
    <div className="about-banner">
        <h1>About us</h1>
      </div>
      <Row className='story m-4 py-4'>
      <Col lg={7} md={12} sm={12} className=''>
        <div className='about-description p-4 ' data-aos="fade-left">
        
          <h2>Our Sweet Story</h2>
          <p>
          We use only the freshest, highest quality ingredients to create our delicious treats. From selecting the finest ingredients to the delicate process of decorating, we pay attention to every detail. Each cake is handcrafted with love and care.
          </p>
          <p>Our values are quality, creativity, and customer satisfaction. We are committed to providing our customers with the most delicious and visually appealing cakes. We constantly strive to create new and exciting flavors and designs. Your satisfaction is our ultimate goal.
          </p>
          
        
        </div>
        </Col>
        <Col lg={5} md={12} sm={12} classname='d-flex justtìy-content-center' data-aos="zoom-in">
          <img src="https://st2.depositphotos.com/1007254/7247/i/450/depositphotos_72472683-stock-photo-baking-utensils.jpg" alt="Our Story" fluid />
        </Col>
      </Row>
      <Row className='story m-4 py-4'>
      <Col lg={6} md={12} sm={12} classname='d-flex justtìy-content-center' data-aos="zoom-in">
      <div className='w-100 d-flex justify-content-center'>
      <img src="https://st4.depositphotos.com/1017228/39879/i/450/depositphotos_398798094-stock-photo-attractive-young-cheerful-girl-baking.jpg" alt="Our Story" fluid />

      </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
        <div className='about-description p-4' data-aos="fade-right">
        
          <h2>Our core values</h2>
         <p>
         We are passionate about crafting the most delectable and visually stunning cakes. By continuously innovating and prioritizing customer satisfaction, we strive to deliver truly unique culinary experiences.
         </p>
         <p>
         We listen and understand our customers' needs. Every cake is made with passion, aiming to bring joy and happiness to those who savor it. Our customers' satisfaction is our greatest reward.
         </p>
         </div>
        </Col>
        
        
       
      </Row>
      <Row className='story m-4 py-4'>
      
        <Col lg={7} md={12} sm={12} className=''>
        <div className='about-description p-4' data-aos="fade-left">
          <h2>Our vision</h2>
          <p>
          Our vision is to be a sustainable bakery brand that contributes to protecting the environment and our community. We use locally sourced ingredients, minimize waste, and support community initiatives          </p>
          <p>
          We envision a future where our bakery is a cornerstone of the community, committed to sustainability. By sourcing locally and reducing waste, we aim to create a positive impact on our environment and support our local farmers.          </p>
          </div>
        </Col>
       
        <Col lg={5} md={12} sm={12} classname='d-flex justtìy-content-center' data-aos="zoom-in">
          <img src="https://www.shutterstock.com/image-photo/hands-working-dough-preparation-recipe-600nw-529133026.jpg" alt="Our Story" fluid />
        </Col>
       
      </Row>
    </Container>
    </div>
  );
};


{/* <Row>
        <Col>
          <h2>Đối tác của chúng tôi</h2>
          <div className="partners">
            <img src="partner1.png" alt="Đối tác 1" />
            <img src="partner2.png" alt="Đối tác 2" />
            Thêm các đối tác khác vào đây 
          </div>
        </Col>
      </Row> 
*/}