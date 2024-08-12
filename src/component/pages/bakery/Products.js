import React, { useEffect, useState } from "react";
import axios from 'axios'
import { CiShoppingCart } from "react-icons/ci";
import { Col, Row, Container } from "reactstrap";
import './Products.css'
const Products = () => {
  const url = "https://66a07c777053166bcabb9364.mockapi.io/Products";
  const [product, setProduct] = useState([]);
  const fetchProducts = () => {
    axios.get(url)
      .then(function (response) {
       
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  console.log(product)
  useEffect(function() {
   
    fetchProducts();
  }, []);
  return (
   
    <div>
      <div className="bakery-banner w-100">
        <h1>In Stock right now</h1>
      </div>
      <Container className="product-cards">
      <Row>
      {
        product && product.map((item, index)=>(
          
            <Col lg={3} md={6} sm={12} key={index} className="my-4">
            <div class="card h-auto" data-aos="zoom-in">
              <img src={item.picture} class="card-img-top h-75" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-center">{item.product}</h4>
                <h5 class="text-center">${item.price}</h5>
                <Row className="my-sm-4">
                  <Col lg={3} sm={12}  >
                  <button
                  class="add-to-cart-button btn btn-primary w-100"
                  onClick={() => dispatch({ type: "Add", product: product })}
                >
                  <CiShoppingCart />
                </button>
                  </Col>
                  <Col lg={9} sm={12}>
                  <button class='details-button btn btn-success w-100'>
                    Details >
                  </button>
                  </Col>
                </Row>
                
              </div>
            </div>
          </Col>
          
  )) 
      }</Row>
      </Container>
    </div>  
  );
};

export default Products;
