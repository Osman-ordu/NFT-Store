import React from 'react'
import { nftArt } from '../../mock/bagDada'
import Card from './card'

const cardContainer = () => {
    return (
        <div className='card-container'>
            {nftArt.map((item,index) => {
                <Card key={index} name={item.id} image={item.nft.image} description={item.nft.description} />

            })}
        </div>
    )
}

export default cardContainer