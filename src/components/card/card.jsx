import React from 'react'


const card = ({name,image,description}) => {
  return (
    <div  className='card'>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
</div>
  )
}

export default card