import nftImage from './../assets/image/dadaclone.png'
import { FaEthereum } from 'react-icons/fa';

let baseId = 1;
const getNftId = () => baseId++;


export const nftItems = [
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.2,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.5,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.6,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.2,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 2.2,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.2,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 0.2,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.2,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 0.8,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.4,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 1.7,
            coin: <FaEthereum/>
        }
    },
    {
        id: getNftId(),
        nft: {
            image: nftImage,
            name: 'bag dada',
            history: 'test',
            price: 2.2,
            coin: <FaEthereum/>
        }
    }
]