
import React, {useState}from 'react'
import './NavBar2.css'
import { Navbar, Nav, Container, NavItem, NavLink } from 'reactstrap'
import {Link } from 'react-router-dom'
import { Button } from '../Button'
import { CiMenuBurger } from 'react-icons/ci'
import logo from './logo.png'
import { IoMdClose } from 'react-icons/io'
export default function NavBar2() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () =>{
        if (window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton)
  return (
    <div>
        <div className='navbar '>
            <div className='navbar-container'>
                <Link to='/' classname='navbar-logo'>
                    logo <img src={logo} width={20}/>
                </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click?'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
                    </div>
                    <ul className={click?'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' classname='navbar-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' classname='navbar-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' classname='navbar-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' classname='navbar-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
         </div>
       </div>
    </div>
  )
}
