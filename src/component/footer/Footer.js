import React from 'react'
import { Row,Col } from 'reactstrap'
import {LoremIpsum, Avatar} from 'react-lorem-ipsum'
import './Footer.css'
import logo  from './logo.png'
import { FaHome, FaPhone, FaRegCopyright } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'
import { CiGlobe } from 'react-icons/ci'
export default function Footer() {
  return (
    <div className='footer container-fluid mx-auto '>
 
          <div>
<<<<<<< HEAD
            <Row  className='footer-top d-flex'>
                 <Col className='col-footer px-4 py-4'xl={3} lg={3} md={6} sm={12}  ><img src={logo} width={40}/><h1></h1><LoremIpsum avgSentencesPerParagraph={2} p={2} /></Col>
                 <Col className='col-footer px-4 py-4' xl={3} lg={3} md={6} sm={12} > <h6 className='text-uppercase fw-bold mb-4'>Check out</h6>
=======
            <Row  className='footer-top'>
                 <Col className='col-footer ms-5 me-2'xl={3} lg={3} md={6} sm={12}  ><img src={logo} width={40}/><h1></h1><LoremIpsum avgSentencesPerParagraph={2} p={2} /></Col>
                 <Col className='col-footer ms-2' xl={3} lg={3} md={6} sm={12} > <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
>>>>>>> 469f4ea2bcaf4a46b9be1148c8b1f10050f38407
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
<<<<<<< HEAD
                <Col className='col-footer px-4 py-4' xl={3} lg={3}  md={6} sm={12} >
                <h6 className='text-uppercase fw-bold mb-4 '>Customer Services</h6>
=======
                <Col className='col-footer ms-2' xl={3} lg={3}  md={6} sm={12} >
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
>>>>>>> 469f4ea2bcaf4a46b9be1148c8b1f10050f38407
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
<<<<<<< HEAD
              <Col className='col-footer px-4 py-4' xl={3} lg={3} md={6} sm={12}  >
              <h6 className='text-uppercase fw-bold mb-4'>Other info</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <FaHome/> 2437, Marshal.st - 36.dis - San Fransokyo - Utopia 
=======
              <Col className='col-footer' xl={3} lg={3} md={6} sm={12}  >
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <FaHome/> Pricing
>>>>>>> 469f4ea2bcaf4a46b9be1148c8b1f10050f38407
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
<<<<<<< HEAD
                  <FaPhone/> (-25) 443-5665-278
=======
                  <FaPhone/> Settings
>>>>>>> 469f4ea2bcaf4a46b9be1148c8b1f10050f38407
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
<<<<<<< HEAD
                  <MdEmail/> thismail@VVmail.com
=======
                  <MdEmail/> Orders
>>>>>>> 469f4ea2bcaf4a46b9be1148c8b1f10050f38407
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
<<<<<<< HEAD
                  <CiGlobe/> https://github.com/DPLam5665
=======
                  <CiGlobe/> Help
>>>>>>> 469f4ea2bcaf4a46b9be1148c8b1f10050f38407
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