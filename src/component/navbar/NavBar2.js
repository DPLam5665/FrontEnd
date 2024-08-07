import React, { useState } from 'react'
import './NavBar2.css'
import { Navbar, Nav, Container, NavItem, NavLink } from 'reactstrap'
export default function NavBar2() {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div class='navbar-contain'>
        <nav>
            <ul className='sidebar'>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>              
                <li><a href='#'>item</a></li>
            </ul>
            <ul>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>
                <li><a href='#'>item</a></li>              
                <li><a href='#'>item</a></li>
                <li><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
         </nav>
       
    </div>
  )
}
