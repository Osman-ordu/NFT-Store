import React from 'react'
import Logo from './homeLogo'
import './home.scss'
import { AiOutlineExpand } from 'react-icons/ai';
import { useState } from 'react';
import Header from './../header/header'
import Main from './../main/main'
import Aside from './../aside/aside'
import Footer from './../footer/footer'

const Home = () => {
    const [show, setShow] = useState(false);

    const showElement = () => {
        setShow((element) => !element)
    }

    return (
        <>
            <Logo />
            <button onClick={showElement} type='button' className='btn shop-now'>LOOK <AiOutlineExpand className=',
      shop-icon' size={12} /> </button>
      {show === true ?  
      <>
        <Header />
        <Main />
        <Aside />
        <Footer />
      </>  : null }
            
            


        </>
    )
}

export default Home