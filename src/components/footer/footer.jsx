import React from 'react';
import './footer.scss'
import { FaPaw } from 'react-icons/fa';
import logo from './../../assets/image/dadaclone.png';


const footer = () => {

  return (
    <>
      <div className="container my-5">

        <footer className="footer text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                  <img src={logo} alt="logo"
                    loading="lazy" style={{width:'280px'}}  />
                </div>

                <p className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
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
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>General information</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>About the shelter</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Statistic data</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Job</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Tenders</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>

                <ul className="list-unstyled">
                  <li>
                    <p><i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
                  </li>
                  <li>
                    <p><i className="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
                  </li>
                  <li>
                    <p><i className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>

      </div>
    </>
  )
}

export default footer

