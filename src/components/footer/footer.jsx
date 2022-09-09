import React from 'react';
import './footer.scss'
import { FaPaw } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'



import logo from './../../assets/image/dadaclone.png';


const footer = () => {

  return (
    <>
      <div className="container my-5">
        <footer className="footer text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="rounded-circle  shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '120px', height: '120px' }}>
                  <img src={logo} className='logo' alt="logo" loading="lazy" style={{ width: '200px' }} />
                </div>
                <p className="text-center  description p-4">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>
                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="https://github.com/Osman-ordu">
                      <AiFillGithub className='social icon-github' />
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="https://www.linkedin.com/in/osmanordutr/">
                      <BsLinkedin className='social icon-linkedin' />
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="https://medium.com/@orduosmann">
                      <BsMedium className='social icon-medium' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />When your pet is missing</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />Recently found</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />How to adopt?</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />Pets for adoption</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />Material gifts</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />Help with walks</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="link-item text-white"><FaPaw className='mx-1' />Volunteer activities</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>Name
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><FaPaw className='mx-1' />General information</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><FaPaw className='mx-1' />About the shelter</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><FaPaw className='mx-1' />Statistic data</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><FaPaw className='mx-1' />Job</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><FaPaw className='mx-1' />Tenders</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><FaPaw className='mx-1' />Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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

          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright:
            <a className="text-white" href="https://www.linkedin.com/in/osmanordutr/">Linkedin</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default footer

