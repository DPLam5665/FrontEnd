import React from 'react'
import './Header.css'
import logo from './logo3.png'
import { Container, Row ,Col, Input, InputGroup, Button, Nav} from 'reactstrap'
import NavBar from '../navbar/NavBar'
import { MdDeliveryDining, MdOutlinePerson } from 'react-icons/md'
import NavBar2 from '../navbar/NavBar2'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { RxAvatar } from "react-icons/rx";
import { AiFillCustomerService } from "react-icons/ai";
export default function Header() {
  return (
    <div className='sticky-top'>
     <div className='header align-items-center'>
      <Row className='hideOnXS header-top text-center'>
          <Col lg={12} md={12} sm={12}><MdDeliveryDining /> Get free shipping on Purchase above $1000/bill</Col>
      </Row>
      <div className='header-search w-100 d-flex justify-content-center align-content-center'>
        <Row className='w-75  h-100 justify-content-center d-flex '>
              <Col lg={3} md={6} sm={6} className='d-flex justify-content-center align-items-center py-2'>
              <img src= {logo} width={150} />
              
              </Col>
              <Col lg={6} md={12} sm={12} className='search-box d-flex justify-content-center align-items-center py-2'>
                <InputGroup >
                  <Input placeholder='Are you looking for something sweet?'/>
                  <Button><CiSearch size={20}/></Button>
                </InputGroup>
                
              </Col> 
              
              <Col lg={3} md={12} sm={12} xs={12} className='d-flex  justify-content-center  align-items-center align-items-lg-center nowrap pt-2 pb-4 pb-lg-2 text-center'>
                <Row className='d-flex w-100 justify-content-center justify-content-lg-between  text-center nowrap'>
                  <Col lg={1} md={3} sm={3} xs={3}><AiFillCustomerService  size={25} className='text-primary-emphasis'/></Col>
                  <Col lg={1} md={3} sm={3} xs={3}><CiShoppingCart size={25} className='text-primary-emphasis'/></Col>
                  <Col lg={1} md={3} sm={3} xs={3}><RxAvatar size={25} className='text-primary-emphasis'/></Col>
                </Row>
              </Col>   
        </Row>
        
      </div>
      <hr/>
     </div>
     <Row>
        <Col className='header-navbar w-100 d-flex justify-content-center'>
            <NavBar/>
        </Col>
     </Row>
    
    </div>
   
  )
}
