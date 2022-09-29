import React from 'react'
import './contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiFillMediumSquare } from 'react-icons/ai'
import Header from '../header/navbar'
import Footer from '../footer/footer'

const contact = () => {
  return (
    <>
      <Header />
      <div className='contact'>
        <div className='container-sm'>
          <div className='contact-content-area'>
            <div className='icon-wrapper icons-group'>
              <a href="mailto: orduosmann@gmail.com" >
                <AiOutlineMail size={140} />
              </a>
              <a href="tel:+5436485164" >
                <AiOutlinePhone size={140} />
              </a>
              <a href='https://www.linkedin.com/in/osmanordutr/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLinkedin size={140} />
              </a>
              <a href='https://medium.com/@orduosmann' target='_blank' rel='noopener noreferrer'>
                <AiFillMediumSquare size={140} />
              </a>
            </div>
            <img className='img-fluid' loading='lazy' src="https://cdn.dribbble.com/users/914004/screenshots/5971597/media/ddf37a78ed787d8620f04084f1cabada.gif" alt="" />
            <img className='img-fluid' loading='lazy' src="https://cdn.dribbble.com/users/914004/screenshots/14413778/media/5f2fd2c218f5262cd5373f964131e2e9.gif" alt="" />
          </div>
          <div className='contact-text-area'>
            <h4 className='text-center m-4 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde ea cum sint dolor, eveniet hic minima ipsum nesciunt saepe.</h4>
            <h4 className='mb-4 p-4 text-end' >THANK YOU GOODBYE.</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default contact