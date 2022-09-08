import React from 'react'
import Logo from './homeLogo'
import './home.scss'
import { useState } from 'react';
import Main from './../main/main'
import Header from '../header/navbar';



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
                ? <>
                    <Header />
                    <Main />
                </>
                : null}
        </>
    )
}

export default Home