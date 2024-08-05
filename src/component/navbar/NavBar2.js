import React from 'react'
// import './NavBar2.css'
import { Navbar, Nav, Container, NavItem, NavLink } from 'reactstrap'
export default function NavBar2() {
  return (
    <div>
        <div className='container-fluid '>
            <Navbar color="light" light expand="md" >
                <Nav className="w-100">
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
         </div>
       
    </div>
  )
}
