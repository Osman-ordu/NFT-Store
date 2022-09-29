import React from 'react'
import FilterButtons from '../filter-buttons/buttonGroup'
import Cards from './cardContainer'
import { useState } from 'react'
import Footer from '../footer/footer'
import Header from '../header/navbar'

const Product = () => {
  const [filter,setFilter] = useState({})
  return (
    <>
    <Header />
    <FilterButtons setFilter={setFilter} />
    <Cards filter={filter} />
    <Footer/>
    </>
  )
}

export default Product