import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Logo from './logo'
import './home.scss'
import { useState } from 'react';
import HomePage from '../home/homePage'


const EntranceArea = () => {
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

                    <HomePage />
                    {/* <Product/> */}
                </>
                : null}
        </>
    )
}

export default EntranceArea