import './navbar.scss'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import logo from './../../assets/image/dadaclone.png'
import { BiCode } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';


const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <Navbar className='navbar-container sticky-top' color="faded" light>
                <NavbarBrand  className="me-auto">
                    <img className="logo-item" src={logo} alt='logo' />
                </NavbarBrand>
                <button onClick={toggleNavbar} type='button' className='btn btn-collapse shadow-none'><BiCode size={30} /></button>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to='/homepage' className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center' href="https://github.com/reactstrap/reactstrap">
                                <FaPaw mx-4/> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about' className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center' href="https://github.com/reactstrap/reactstrap">
                                About <FaPaw mx-4/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact' className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center' href="https://github.com/reactstrap/reactstrap">
                            <FaPaw mx-4/> Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/product' className='nav-link fw-bold border border-dark border-1 rounded p-2 text-center' href="/components/">
                                Collections <FaPaw mx-4/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header