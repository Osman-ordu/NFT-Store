import logo from './../../assets/image/dadaclone.png'
import './navbar.scss'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import { BiCode } from 'react-icons/bi';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <Navbar className='navbar-container sticky-top' color="faded" light>
                <NavbarBrand href="/" className="me-auto">
                    <img className="logo-item" src={logo} alt='logo' />
                </NavbarBrand>
                <button onClick={toggleNavbar} type='button' className='btn btn-collapse shadow-none'><BiCode size={30} /></button>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='fw-bold' href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='fw-bold' href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header