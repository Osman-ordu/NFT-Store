import React from 'react'
import Logo from './homeLogo'
import './home.scss'
import { useState } from 'react';
// import Header from './../header/header'
import Main from './../main/main'
// import Aside from './../aside/aside'
// import Footer from './../footer/footer'
const Home = () => {
    const controllerSwitch = false;
    const [show, setShow] = useState(controllerSwitch);

    const showElement = () => {
        setShow((element) => !element);
    }

    return (
        <>
            {
                show && show === !controllerSwitch
                    ? null
                    : <Logo />
            }
            {
                show && show === !controllerSwitch
                    ? null
                    : <button type='button' onClick={showElement} className='btn shop-now'>LOOK</button>
            }
            {show === !controllerSwitch
                ? <Main />
                : null}
        </>
    )
}

export default Home