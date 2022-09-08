import React from 'react'
import { nftItems } from '../../mock/nftData'
import Card from './card'
import './card.scss'

const CardContainer = ({ filter }) => {
    return (
        <>
            <div className='card-container'>
                {filter && nftItems.map((item, index) => (
                    <Card
                        key={index}
                        id={item.id}
                        name={item.nft.name}
                        image={item.nft.image}
                        price={item.nft.price}
                        coin={item.nft.coin}
                    />

                ))}
            </div>
        </>

    )
}

export default CardContainer