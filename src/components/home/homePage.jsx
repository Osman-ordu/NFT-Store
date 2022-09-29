import React from 'react'
import Header from '../header/navbar'
import Footer from '../footer/footer'
import Content from './content'
import { pageFragments } from '../../mock/nftData'

const homePage = () => {
  return (
    <>
      <Header />
      <div className='entrance-area container-sm d-flex flex-column'>
        <h1 className='text-center fw-bold'>NFT is one of the most interesting <i>digital</i> data of recent years.</h1>
        <h3 className='text-center mt-5'>
          NFTs, which have a very different application than classical cryptocurrencies, keep many works that you produce in the digital environment.
        </h3>
        <div className='d-flex justify-content-center gap-4 flex-wrap p-5'>

        <img   src="https://cdn.dribbble.com/users/914004/screenshots/14534035/media/6704a5ef1d1081ab8bacee5a518e4aa5.gif" alt="nft-image" />
        <img  className='show' src="https://cdn.dribbble.com/users/914004/screenshots/14534035/media/6704a5ef1d1081ab8bacee5a518e4aa5.gif" alt="nft-image" />
        </div>
      </div>
      {pageFragments.map((item, index) => (
        <Content
          key={index}
          title={item.fragment.title}
          image={item.fragment.image}
          content={item.fragment.content} />
      ))}
      <Footer />
    </>
  )
}

export default homePage