import React from 'react'
import { Row,Col } from 'reactstrap'
import {LoremIpsum, Avatar} from 'react-lorem-ipsum'
import './Footer.css'
import logo  from './logo3.png'
import { FaHome, FaPhone, FaPinterest, FaRegCopyright } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'
import { CiFacebook, CiGlobe, CiInstagram } from 'react-icons/ci'
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  return (
    <div className='footer container-fluid mx-auto '>
 
          <div>
            <Row  className='footer-top d-flex'>
                 <Col className='col-footer px-4 py-4'xl={3} lg={3} md={6} sm={12}  ><span className='d-flex justify-content-center justify-content-lg-start ps-lg-3 p'><img src={logo} width={200} /></span>
                    <h5 className='py-2'>Have a question?</h5>
                    <p className='pb-2'>Feel free to ask us on our official media</p>
                    <div className='footer-media-icons '><CiFacebook className='mx-2'/><BsTwitterX className='mx-2'/><CiInstagram className='mx-2'/><FaPinterest className='mx-2'/></div>
                 </Col>
                 <Col className='col-footer px-4 py-4' xl={3} lg={3} md={6} sm={12} > <h6 className='text-uppercase fw-bold mb-4'>Check out</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Press
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gift cards
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Subscription
                </a>
              </p></Col>
                <Col className='col-footer px-4 py-4' xl={3} lg={3}  md={6} sm={12} >
                <h6 className='text-uppercase fw-bold mb-4 '>Customer Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Help center
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refunds and Return
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Promotion terms
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Whole sale
                </a>
              </p></Col>
              <Col className='col-footer px-4 py-4' xl={3} lg={3} md={6} sm={12}  >
              <h6 className='text-uppercase fw-bold mb-4'>Other info</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <FaHome/> 2437, Marshal.st - 36.dis - San Fransokyo - Utopia 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <FaPhone/> (-25) 443-5665-278
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <MdEmail/> thismail@VVmail.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <CiGlobe/> https://github.com/DPLam5665
                </a>
              </p>
              </Col>
            </Row>
            </div>

        
            <hr/>
     
            <Row className='footer-bot mx-auto w-100 text-center d-flex justify-content-center'>
            <div className='copyright'>
              <FaRegCopyright fontSize={30} /><h1>2024 by DPLam</h1>
            </div>
            
            </Row>
            
    
        </div>     
       
    
  )
}