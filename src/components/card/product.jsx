import React from 'react'
import FilterButtons from '../filter-buttons/buttonGroup'
import Cards from './cardContainer'
import { useState } from 'react'
import Footer from '../footer/footer'

const Product = () => {
  const [filter,setFilter] = useState({})
  return (
    <>
    <FilterButtons setFilter={setFilter} />
    <Cards filter={filter} />
    <Footer/>
    </>
  )
}

export default Product