import React from 'react'
import Header from '../header/navbar'
import Footer from '../footer/footer'
import Content from './content'
import { pageFragments } from '../../mock/nftData'

const homePage = () => {
  return (
    <>
    <div className='container-sm d-flex flex-column'>
      <h1 className='text-center fw-bold'>NFT is one of the most interesting <i>digital</i> data of recent years.</h1>
      <h3 className='text-center mt-5'>
       NFTs, which have a very different application than classical cryptocurrencies, keep many works that you produce in the digital environment.
      </h3>
      <img style={{width:'60%'}} className='align-self-center p-4 m-4' src="https://flatart.com.tr/static/2c5b8cff944b9da516f572a86c98f6a5/79f07/nft-new.jpg" alt="nft-image" />
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