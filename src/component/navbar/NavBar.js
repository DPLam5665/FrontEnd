import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import './NavBar.css'
import logo from './logo3.png'
import {Link} from 'react-router-dom'
function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar expand='xl' className='navbar d-flex justify-content-center'{...args}>
        <NavbarToggler className='collapse-menu' onClick={toggle} />
        <Collapse className='navbar-collapse ' isOpen={isOpen} navbar>
          <Nav className="navigation mx-auto d-flex " navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Category
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><NavLink href='/bakery'>Bakery</NavLink></DropdownItem>
                {/* <DropdownItem><NavLink href='/sweet'>Sweet</NavLink></DropdownItem> */}
                <DropdownItem><NavLink href='/materials'>Materials & Tools</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>More options</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/shop">Shops</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
     
    
  );
}

export default NavBar;