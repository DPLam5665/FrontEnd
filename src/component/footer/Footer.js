import React from 'react'
import { Row,Col } from 'reactstrap'
import {LoremIpsum, Avatar} from 'react-lorem-ipsum'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer container-fluid mx-auto'>
        
            <Row>
                <Col lg={4} sm={12} ><LoremIpsum avgSentencesPerParagraph={3} p={1} /></Col>
                <Col lg={4} sm={12} ><LoremIpsum avgSentencesPerParagraph={3} p={1}/></Col>
                <Col lg={4} sm={12} ><LoremIpsum avgSentencesPerParagraph={3} p={1}/></Col>
            </Row>
        
            <hr/>
            <Row className='mx-auto'>
                <Col lg={12} className='text-center'>
                    haciahnbiwbwiw
                </Col>
            </Row>
            
       
    </div>
  )
}
