import React from 'react'
import './contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiFillMediumSquare } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


const contact = () => {
  return (
    <div className='contact'>
      <div className='container-sm'>
        <div className='contact-wrapper mt-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nihil veritatis error aperiam? Fuga facere doloremque officiis dolores,
            ipsum reprehenderit officia eaque expedita hic et suscipit amet natus velit
            inventore qui in nemo laudantium perspiciatis sunt illo. Quibusdam, porro molestias?
          </p>
          <div className='icons-group d-flex gap-2 justify-content-center align-items-center mt-5 flex-wrap  '>
            <a href="mailto: orduosmann@gmail.com">
              <AiOutlineMail size={100} />
            </a>
            <a href="tel:+5436485164">
              <AiOutlinePhone size={100} />
            </a>
            <NavLink to='https://www.linkedin.com/in/osmanordutr/'>
              <AiOutlineLinkedin size={100} />
            </NavLink>
            <NavLink to='https://medium.com/@orduosmanns'>
              <AiFillMediumSquare size={100} />
            </NavLink>
          </div>

        </div>

      </div>
    </div>
  )
}

export default contact