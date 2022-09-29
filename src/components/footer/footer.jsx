import './footer.scss'
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import logo from './../../assets/image/dadaclone.png';


const footer = () => {

  return (
    <>
      <div className="container-fluid g-0">
        <footer className="footer text-center text-lg-start text-white">
          <div className="container-fluid">
            <div className="row my-4">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className="rounded-circle  shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '120px', height: '120px' }}>
                  <img src={logo} className='logo' alt="logo" loading="lazy" style={{ width: '200px' }} />
                </div>
                <p className="text-center  description p-4">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>
                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <NavLink className="text-white px-2 link-item" to="https://github.com/Osman-ordu">

                      <AiFillGithub className='social icon-github' />
                    </NavLink>

                  </li>
                  <li>
                    <NavLink className="text-white px-2 link-item" to="https://www.linkedin.com/in/osmanordutr/">
                      <BsLinkedin className='social icon-linkedin' />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-white ps-2 link-item" to="https://medium.com/@orduosmann">
                      <BsMedium className='social icon-medium' />
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="mb-4">All About NFT</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <NavLink className='link-item text-white'><FaPaw className='mx-1' /> What is nft?</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className='link-item text-white'><FaPaw className='mx-1' /> Differences between crypto coin and nft?</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className='link-item text-white'><FaPaw className='mx-1' /> How to Convert Art to Crypto?</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className='link-item text-white'><FaPaw className='mx-1' /> Where and How to Get NFT?</NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className='link-item text-white'><FaPaw className='mx-1' /> Why Buy NFT?</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>
                <ul className="list-unstyled">
                  <li>
                    <p><GiPositionMarker className='mx-1' />Istanbul/Turkey</p>
                  </li>
                  <li>
                    <p><BsFillTelephoneFill className='mx-1' />+ 01 234 567 89</p>
                  </li>
                  <li>
                    <p><BsFillEnvelopeFill className='mx-1' /> orduosmann@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3" >
            © 2022 Copyright:
            <NavLink className="text-white" to="https://www.linkedin.com/in/osmanordutr/">Linkedin</NavLink>
          </div>
        </footer>
      </div>
    </>
  )
}

export default footer

