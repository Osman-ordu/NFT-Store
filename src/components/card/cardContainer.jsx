import React from 'react'
import { nftItems } from '../../mock/bagDada'
import Card from './card'
import './card.scss'

const cardContainer = () => {
    return (
        <div className='card-container'>
            {nftItems.map((item, index) => (
                <Card
                    key={index}
                    id={item.id}
                    name={item.nft.name}
                    image={item.nft.image}
                    history={item.nft.history}
                    price={item.nft.price}
                    coin={item.nft.coin}
                />

            ))}
        </div>
    )
}

export default cardContainer