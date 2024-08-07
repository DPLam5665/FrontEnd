import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import "./Home.css";
import CarouselHome from "../../carousel/CarouselHome";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import baking from './baking.mp4'
import wedding from "./wedding.jpg";
export default function Home() {
  AOS.init();
  return (
    <div className="home container-fluid">
      <section className="background-video">
        <video src={baking} type="video/mp4" id="baking-background" autoPlay loop muted />
   
      </section>
      <section className="carousel-slide w-100">
        <div className="carousel-product">
          <CarouselHome />
         
        </div>
      </section>
      <section className="ourProducts">
      <h1>Our Newest</h1>
      <div className="carousel-bot ">
            <Row className="my-2">
              <Col lg={3} md={6} sm={12} className="my-2 "  data-aos="zoom-in">
                <Card>
                <img src={wedding}  />
                <p>Sample</p>
                </Card>
                
              </Col>
              <Col lg={3} md={6} sm={12} className="my-2"  data-aos="zoom-in">
              <Card>
                <img src={wedding}  />
                <p>Sample</p>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12} className="my-2"  data-aos="zoom-in">
              <Card>
                <img src={wedding}  />
                <p>Sample</p>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12} className="my-2"  data-aos="zoom-in">
              <Card>
                <img src={wedding}  />
                <p>Sample</p>
                </Card>
              </Col>
            </Row>
          </div>
      </section>
    </div>
  );
}
