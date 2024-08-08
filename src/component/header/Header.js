import React from 'react'
import './Header.css'
import logo from './logo2.png'
import { Container, Row ,Col, Input, InputGroup, Button, Nav} from 'reactstrap'
import NavBar from '../navbar/NavBar'
import { MdDeliveryDining, MdOutlinePerson } from 'react-icons/md'
import NavBar2 from '../navbar/NavBar2'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
export default function Header() {
  return (
    <div className='sticky-top'>
     <div className='header align-items-center'>
      <Row className='header-top text-center'>
          <Col lg={12} md={12} sm={12}><MdDeliveryDining /> Get free shipping on Purchase above $1000/bill</Col>
      </Row>
      <div className='header-search w-100 d-flex justify-content-center align-content-center'>
        <Row className='w-75 h-100  justify-content-between d-flex flex-sm-nowrap'>
              <Col lg={3} md={3} sm={3} className='d-flex justify-content-center align-items-center'>
              <img src= {logo} width={100} />
              
              </Col>
              <Col lg={6} md={6} sm={6} className='d-flex justify-content-center align-items-center'>
                <InputGroup className='hideOnMobile'>
                  <Input/>
                  <Button><CiSearch /></Button>
                </InputGroup>
                
              </Col> 
              
              <Col lg={3} md={3} sm={3} className='d-flex justify-content-center align-items-center nowrap'>
                <Row className='w-100 d-flex justify-content-center'>
                  <Col lg={1} md={1} sm={1}><MdOutlinePerson /></Col>
                  <Col lg={1} md={1} sm={1}><CiShoppingCart /></Col>
                  <Col lg={1} md={1} sm={1} className='showOnMobile'><CiSearch /></Col>
                </Row>
              </Col>   
        </Row>
        
      </div>
      <hr/>
     </div>
     <Row>
        <div className='header-navbar w-100 d-flex justify-content-center'>
            <NavBar/>
        </div>
     </Row>
    
    </div>
   
  )
}
