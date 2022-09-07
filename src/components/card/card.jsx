import React from 'react'


const card = ({ id, name, image, history,price,coin }) => {
  return (
    <div className='card'>
      <img className='nft-image' src={image} alt={name} />
      <h4 className='nft-name'>{name + ' ' + '#' + id}</h4>
      <p className='nft-history'>{history}</p>
    </div>
  )
}

export default card