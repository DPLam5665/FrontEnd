import React from 'react'
import './Header.css'
import logo from './logo.png'
import { Container, Row ,Col} from 'reactstrap'
import NavBar from '../navbar/NavBar'
import { MdDeliveryDining } from 'react-icons/md'
import NavBar2 from '../navbar/NavBar2'
export default function Header() {
  return (
    <>
     <div className='header'>
      <Row className='header-top text-center'>
      <MdDeliveryDining /> Get free shipping on Purchase above $1000/bill
      </Row>
      <div className='header-searchbox'>
      {/* <Row>
            <Col>
            <img src= {logo} width={50} />
            <p className='hideOnMobile'>Polluxe</p>   
            </Col>
      </Row> */}
      </div>
      <Row className='container-navbar' >
        <NavBar2/>
      </Row>
     </div>
    </>
   
  )
}
