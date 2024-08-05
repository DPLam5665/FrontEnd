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
            <Row  className='footer-top'>
                 <Col className='col-footer ms-5 me-2'xl={3} lg={3} md={6} sm={12}  ><img src={logo} width={40}/><h1></h1><LoremIpsum avgSentencesPerParagraph={2} p={2} /></Col>
                 <Col className='col-footer ms-2' xl={3} lg={3} md={6} sm={12} > <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p></Col>
                <Col className='col-footer ms-2' xl={3} lg={3}  md={6} sm={12} >
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p></Col>
              <Col className='col-footer' xl={3} lg={3} md={6} sm={12}  >
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  <FaHome/> Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <FaPhone/> Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <MdEmail/> Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  <CiGlobe/> Help
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