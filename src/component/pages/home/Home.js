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
        <div className="banner1">
          <h1>Closer look</h1>
        </div>
        <div className="carousel-product container">
          <CarouselHome />
        </div>
      </section>
      <section className="ourProducts">
        <div className="banner1">
          <h1>Our Newest</h1>
        </div>
        <div className="carousel-bot container">
          <Row className="my-2">
            <Col lg={3} md={6} sm={12} className="my-2 " data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://www.generatormix.com/images/cake/krantz-cake.jpg"
                  height={300}
                  className="card-img-top"
                />
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-20%</p>
                </div>
              </Card>
              <h3>Krantz cake</h3>
              <h5>$5.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://media.istockphoto.com/id/649691790/photo/tarte-tatin.jpg?s=612x612&w=0&k=20&c=bU5FZ5kuHK4n9h_oUjTsTQ4YdVJsuPgxel0DsRWHHzE="
                  height={300}
                  className="card-img-top"
                />
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-27%</p>
                </div>
              </Card>
              <h3>Tarte Tatin</h3>
              <h5>$45.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://schneidergmbhcom.s3.eu-central-1.amazonaws.com/l7oraob3c4wxr1bdusxc4kh0h0n4"
                  height={300}
                  className="card-img-top"
                />
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-12%</p>
                </div>
              </Card>
              <h3>Silicone Baking Mould</h3>
              <h5>$8.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://www.generatormix.com/images/cake/frankfurter-kranz-(frankfurt-crown-cake).jpg"
                  height={300}
                  className="card-img-top"
                />
              </Card>
              <h3>Frankfurter Krantz</h3>
              <h5>$50.00</h5>
            </Col>
          </Row>
          <Row className="my-2">
            <Col lg={3} md={6} sm={12} className="my-2 " data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://cdn-0.generatormix.com/images/cake/coffee-cake.jpg"
                  height={300}
                  className="card-img-top"
                />
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-39%</p>
                </div>
              </Card>
              <h3>Coffee cake</h3>
              <h5>$5.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://static-01.daraz.lk/p/b6cbbd718f8ae26bebbd07effdc2da90.jpg"
                  height={300}
                  className="card-img-top"
                />
              </Card>
              <h3>Cake knife set</h3>
              <h5>$45.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://i0.wp.com/windycitybaker.com/wp-content/uploads/2020/06/Homemade_Sprinkles_7.jpg?resize=1024%2C683&ssl=1"
                  height={300}
                  className="card-img-top"
                />
                <div className="card-img-overlay text-start text-danger">
                  <p className="discount-tag">-8%</p>
                </div>
              </Card>
              <h3>Sprinkles</h3>
              <h5>$8.00</h5>
            </Col>
            <Col lg={3} md={6} sm={12} className="my-2" data-aos="zoom-in">
              <Card className=" ">
                <img
                  src="https://thebakingtools.com/cdn/shop/files/silicon-piping-bag-12-inch-thebakingtools-com.png?v=1721593602"
                  height={300}
                  className="card-img-top"
                />
              </Card>
              <h3>Silicone piping bag</h3>
              <h5>$50.00</h5>
            </Col>
          </Row>
        </div>
      </section>
      <section className="delivery-banner container-fluid d-flex justify-content-center flex-wrap h-auto">
        <div className="banner1 w-100">
          <div className="w-100">
            <h1>Delivery and Pick Up Options</h1>
            <p style={{ color: "black", fontWeight: "600" }}>
              {" "}
              We make it easy for you to get TheSweetDream’s best, wherever you
              are. Order now for cross-country shipping, place an order to
              pickup at your local place.
            </p>
            <div className="d-flex justify-content-center">
              <a href="">
                <h3 className="extra-link">Learn more</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <Row lg={3}>
            <Col lg={4} md={6} sm={12}>
              <Card data-aos="fade-right">
                <div className="p-4"
                  style={{ backgroundColor: "#ffbe76", height: "300px" }}
                >
                  <h3>Cross-country Shipping</h3>
                  <p>For over 50+ countries accross Asia, Europe and The US,...Our distribution partner not only guarantee you fastest delivering, but also safe and convenient.</p>
                </div>
              </Card >
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card data-aos="flip-down">
                <img src="https://cdn.sponge.co.uk/cdn-cgi/image/fit=crop,format=auto,width=640,height=300/blog-heroes/Delivery-Hero-Image.jpg"
                  height={300}
                />
                
              </Card>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <Card data-aos="fade-left">
                <div className="p-4"
                  style={{ backgroundColor: "#ffbe76", height: "300px" }}
                >
                 <h3>Catering and Event</h3>
                 <p>Our catering and events team will work closely with you to customize a wide range of cakes, cupcakes, and other crowd-favorite desserts in your desired styles, colors, and sizes.</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
