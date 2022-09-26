import { FaEthereum } from 'react-icons/fa';

let baseId = 1;
const getDataId = () => baseId++;

export const pageFragments = [
    {
        id: getDataId(),
        fragment: {
            title: 'What is NFT?',
            image: 'https://egamers.io/wp-content/uploads/2021/04/What-is-NFT-Non-Fungible-Tokens-Explained.jpg',
            content: 'A non-fungible token (NFT) is a record on a blockchain which is associated with a particular digital or physical asset.[1] The ownership of an NFT is recorded in the blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded. NFTs can be created by anybody, and require few or no coding skills to create.[2] NFTs typically contain references to digital files such as photos, videos, and audio. Because NFTs are uniquely identifiable assets, they differ from cryptocurrencies, which are fungible.'

        },
    },
    {
        id: getDataId(),
        fragment: {
            title: 'What is the Difference Between Crypto Coin and NFT?',
            image: 'https://img.freepik.com/premium-vector/funny-bitcoin-character-with-slingshot-crypto-currency-emoticon-vector-illustration-isolated-sky-blue-background_178650-3361.jpg?w=2000',
            content: 'NFT is based on Ethereum, a cryptocurrency. Although blockchain is transaction-based, the uniqueness and immutability of NFT makes it more special than a regular cryptocurrency. NFT cannot be exchanged with another digital asset, nor can it be fragmented like cryptocurrencies. Due to its uniqueness, NFT cannot be replicated at the same time.'

        },
    },
    {
        id: getDataId(),
        fragment: {
            title: 'How to Convert Art to Crypto?',
            image: 'https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83NjM3MDc2OTg0OTBiMzQzMDNkZmQ4ZGEyOWJhNTM3Yy5qcGc=.jpg',
            content: 'NFTs, which started to be developed in 2017, seem to have come a long way today. Every artist works today to produce NFT in different formats and fields. From short GIFs to more ambitious pieces like original compositions and clips, it s technically not difficult to create NFTs. After transferring the digitally produced artifacts to the blockchain infrastructure, associating them with the cryptocurrency wallet is enough to create an NFT. After this process is completed, it remains to choose the digital market where the NFT will be sold.'

        },
    },
    {
        id: getDataId(),
        fragment: {
            title: 'Where and How to Get NFT?',
            image: 'https://cdn.webrazzi.com/uploads/2021/12/nft-353.png',
            content: 'Depending on what you want to buy, it is possible to access NFTs from different platforms. There are different platforms for NFTs, from special sites for card collectors to online accessories for video games. NBA Top Shot, Open Sea, SuperRare, Nifty Gateaway and Binance are among the most well-known of these platforms. NFT sales on these and similar platforms are generally made by auction and bidding method. You need a digital wallet for all these transactions.'

        },
    },
    {
        id: getDataId(),
        fragment: {
            title: 'Why Buy NFT?',
            image: 'https://i0.wp.com/kriptokoin.com/wp-content/uploads/2021/08/610abebd026e528d82094bb1_EFI-ENJ-NFT-ownership_illu.png?resize=1024%2C677&ssl=1',
            content: 'You may have question marks in your mind about buying something that you can easily access in the digital environment. For example, if the NFT you are interested in is a jpeg file; You may think that you can easily find it through a search engine. Moreover, you can have the image you find by saving it to your computer. But you need to know that what you have is a "copy". By purchasing NFT, you get the original of the work. The blockchain system also works to verify the authenticity of the NFT. By purchasing an NFT that matches a single and unique code over the Ethereum system, you are purchasing the privilege of being the sole owner of the product. To make an artistic analogy, instead of buying a Van Gogh reproduction, you can experience the happiness of owning the original.'

        },
    }
]

export const nftItems = [
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/cdkRxXdxoz2u1r-3X8o8g1dAJoVu_b6jmtp31lIHyCp5ppt_rtGk_kIiCMz89V04Otmfvr8Bb6ghYKd7JxLOxRFAjbl50J19vTWWJpM=w418',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599719328973586932',
            backGroundcolor: 'green',
            price: 1.2,
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/J2MXrmtUXh3ovBGH4me6wcrZOAA-iZncIYzcA8pbX4PTb7XXdMtEw8i0YkZmmLDjgJnVneQgRNdesHe7T8Nx4XlDkl8rD5Vc5hdY97c=w418',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599716030438703604',
            price: 0.0046,
            backGrounDcolor: 'red',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/0lowzVMU9W4EEBcb74-qX8QUiaUcLea1qqlYRUlTmd-DBAglXIPKlY4LLc12WGlhSpv9VbFhKodhIW3sb1h4RMN0um3jPBcv_eNR76E=w418',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599728125066609140',
            price: 1.6,
            backGroundColor: 'purple',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/rJzSd6KodKMe30847h19yoTUM2Ro2z3sP5yzbs-R1pRlE67PkVOGDDSV_iAqi1ZFa3uQDt6lP8w94i2rSyYNqA0t3ni8dx7xea5Pyg=w600',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599738020671259124',
            price: 1.2,
            backGrounDcolor: 'beige',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/ZZkO4J7SavSpzSHB7GWGLql9G9zToNeMkFQ2Pxuwu1Mgralqjw3CQMGGTu1-E06eRUX40jwH1KggeoJCxN6tRnxEuEZfLiwMH658=w600',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599714930927076328',
            price: 0.0018,
            backGrounDcolor: 'random',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/sXxlysoPSrxrZ6P4xXsag3xxETeaep2tEPA8tP-z4SyFzD3z8EwOVVookSbB5YukfxmbqboMphSKCi6pZX5uJ_gMFZ8N_ZteifxQ=w418',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599723727020098536',
            price: 0.0046,
            backGrounDcolor: 'random',
            pantsColor: 'random',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/M0vhlHo9N91eD2L_HtqwNcNe6x6vFuvEFsYtuc61tr4ApUd7d6hmtdxi_stoNq8PjuNoxyFaeatAu7T_IlVb8Cqd6Mr3rmXCcf4nrbs=w418',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599730324089865192',
            price: 0.0046,
            backGrounDcolor: 'random',
            pantsColor: 'random',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/QC0Y84xk6m73FwTftBSG7gY97mLzatuUvjDEIEiO8bOEPYU8Zv30iUMncBc3hRxQ3TkKLAMfCtMnrW2GdrgEzunA2KpM5bROLSGPTw=w600',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599735821648003572',
            price: 1.2,
            backGrounDcolor: 'yellow',
            pantsColor: 'red',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/wlaCnTJBovJVwhaZodOFmumjI2xrkiE8jEZ7uFy1kF1UiMDAtURKA0l3JqJz4_uLPdbvf2RlFS6YCC13gKHgsFQx2U2w0YVHOD2Y=w600',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599734722136375796',
            price: 0.8,
            backGrounDcolor: 'red',
            pantsColor: 'blue',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/OLQoiydKfTynH-ZnluSmwvJmEH00zEFLB1coerrJ74w537Xy-KybQCdFgS10hhI3hO7j1LBXJu26NInuCYdqyaT6SRYi_b4lr7vi7w=w418',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599722627508470260',
            price: 1.4,
            backGrounDcolor: 'gray',
            pantsColor: 'black',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/WcSR9Gi0jFMJ_GhS1xN1aOFdyHfeAQokTshEMvHokUzjUWqy-ygtVAfToJ4ZCoZpCT5lYKe6Drx81Oh5LwjZ3oHtTtYeK5XPT6EB_ZA=w600',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599733622624748020',
            price: 1.4,
            backGrounDcolor: 'yellow',
            pantsColor: 'khaki',
            coin: <FaEthereum />
        }
    },
    {
        id: getDataId(),
        nft: {
            image: 'https://lh3.googleusercontent.com/WzgSiXRYLcrMZJmkYvlilGljhrZ0NkkYAKktO2OfNYwwXot4AxjfSW-WS2ohG6_TMm0KQVk9gzyw59q34C1UCPVKFqA_bhqNBzXWdM0=w600',
            name: 'Mega Star',
            collection: 'bag-dada',
            nftLink: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/70673849202813681838097059514919637670540684780107371790678599732523113120244',
            price: 1.4,
            backGrounDcolor: 'beige',
            pantsColor: 'orange',
            coin: <FaEthereum />
        }
    }
]

