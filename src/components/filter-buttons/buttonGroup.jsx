import './buttonGroup.scss'
import { nftItems } from '../../mock/nftData';


const filterButtons = ({ setFilter }) => {

    const filterRisingPrice = () => {
        const filterPrice = nftItems.sort((a, b) => parseFloat(a.nft.price) - parseFloat(b.nft.price), Number);
        setFilter(filterPrice)
        setFilter([])
    }
    const filterDecreasingPrice = () => {
        const filterPrice = nftItems.sort((a, b) => parseFloat(b.nft.price) - parseFloat(a.nft.price), Number);
        setFilter(filterPrice)
        setFilter([])
    }

    return (
        <div className='btn-group'>
            <button onClick={filterRisingPrice} className='btn'>
                <span>
                Increasing by price
                </span>
            </button>
            <button onClick={filterDecreasingPrice} className='btn'>
                <span>
                Decreasing by price
                </span>
            </button>
        </div>
    )
}

export default filterButtons;