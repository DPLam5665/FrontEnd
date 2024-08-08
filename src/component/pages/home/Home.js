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

import wedding from "./wedding.jpg";
import VideoBanner from "../../video-banner/VideoBanner";
export default function Home() {
  
  return (
    <div className="home container-fluid">
      <VideoBanner />
      <section className="carousel-slide w-100">
        <div className="carousel-product">
          <CarouselHome />
        </div>
      </section>
      <section className="ourProducts">
        <h1>Our Newest</h1>
        <div className="carousel-bot container">
          <Row className="my-2">
            <Col lg={3} md={6} sm={12} className="my-2 " data-aos="zoom-in">
              <Card className="border-primary border-2 ">
                <img src='https://www.generatormix.com/images/cake/krantz-cake.jpg'  height={300} className="card-img-top"/>
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-20%</p>
                </div>
              </Card>
              <h3>Krantz cake</h3>
              <h5>$5.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
            <Card className="border-primary border-2 ">
                <img src='https://media.istockphoto.com/id/649691790/photo/tarte-tatin.jpg?s=612x612&w=0&k=20&c=bU5FZ5kuHK4n9h_oUjTsTQ4YdVJsuPgxel0DsRWHHzE='  height={300} className="card-img-top"/>
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-20%</p>
                </div>
              </Card>
              <h3>Tarte Tatin</h3>
              <h5>$45.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
            <Card className="border-primary border-2 ">
                <img src='https://schneidergmbhcom.s3.eu-central-1.amazonaws.com/l7oraob3c4wxr1bdusxc4kh0h0n4'  height={300} className="card-img-top"/>
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-20%</p>
                </div>
              </Card>
              <h3>Silicone Baking Mould</h3>
              <h5>$8.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
            <Card className="border-primary border-2 ">
                <img src='https://www.generatormix.com/images/cake/frankfurter-kranz-(frankfurt-crown-cake).jpg'  height={300} className="card-img-top"/>
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-20%</p>
                </div>
              </Card>
              <h3>Frankfurter Krantz</h3>
              <h5>$50.00</h5>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
