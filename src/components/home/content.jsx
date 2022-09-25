import React from 'react'
import './content.scss'

const content = ({ title, image, content }) => {
    return (
        <div className='content-container'>
            <h3 className='text-center'>{title}</h3>
            <div className='content-area'>
                <img className='img-fluid content-image' src={image} alt={title} />
                <p>{content}</p>
            </div>
        </div>

    )
}

export default content