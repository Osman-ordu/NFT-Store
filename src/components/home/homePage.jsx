import React from 'react'
import Header from '../header/navbar'
import Footer from '../footer/footer'
import Content from './content'
import { pageFragments } from '../../mock/nftData'

const homePage = () => {
  return (
    <>
      <Header />
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