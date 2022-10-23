import './navbar.scss'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import logo from './../../assets/image/dadaclone.png'
import { BiCode } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';


const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const scrollToTop = () => {
        document.getElementById('scroller').scroll(0,0)
    }

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <Navbar className='navbar-container sticky-top' color="faded" light>
                <NavbarBrand  className="me-auto">
                    <img className="logo-item" src={logo} alt='logo' />
                </NavbarBrand>
                <button onClick={toggleNavbar} type='button'  className='btn btn-collapse shadow-none'><BiCode size={30} /></button>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to='/homepage' onClick={scrollToTop} className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center'>
                                <FaPaw mx-4/> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about' onClick={scrollToTop} className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center'>
                                About <FaPaw mx-4/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/product' onClick={scrollToTop} className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center'>
                                Collections <FaPaw mx-4/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact' onClick={scrollToTop} className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center'>
                            <FaPaw mx-4/> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header
