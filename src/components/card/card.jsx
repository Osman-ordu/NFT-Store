import React from 'react'


const card = ({ id, name, image, price, coin, nftLink }) => {
  return (
    <>
      <a href={nftLink} className='card'>
        <img className='nft-image' src={image} alt={name} />
        <div className='card-body'>
          <h4 className='nft-name'>{name + ' ' + '#' + id}</h4>

          <div className='price-body'>
            <h4 className='price-title'>Price</h4>

            <span className='coin-icon'>{coin}</span>{price.toString().replace('.', ',')}
          </div>
          <a className='buy-now' href="http://" target="_blank" rel="noopener noreferrer">buy now</a>
        </div>
      </a>
    </>

  )
}

export default card