import nftImage from './../assets/image/queen-of-liberty.webp'
import { FaEthereum } from 'react-icons/fa';

let baseId = 1;
const getNftId = () => baseId++;


export const nftItems = [
    {
        id:getNftId(),
        nft:{
            image:nftImage,
            name:'test',
            history:'test',
            price:1.2,
            coin:FaEthereum
        }
    },
    {
        id:getNftId(),
        nft:{
            image:nftImage,
            name:'test',
            history:'test',
            price:1.2,
            coin:FaEthereum
        }
    },
    {
        id:getNftId(),
        nft:{
            image:nftImage,
            name:'test',
            history:'test',
            price:1.2,
            coin:FaEthereum
        }
    },
    {
        id:getNftId(),
        nft:{
            image:nftImage,
            name:'test',
            history:'test',
            price:1.2,
            coin:FaEthereum
        }
    }
]