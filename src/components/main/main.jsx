import React from 'react'
import FilterButtons from '../filter-buttons/buttonGroup'
import Cards from '../card/cardContainer'
import Footer from '../footer/footer'
import { useState } from 'react'

const Main = () => {
  const [filter,setFilter] = useState({})
  return (
    <>
    <FilterButtons setFilter={setFilter} />
    <Cards filter={filter} />
    <Footer/>
    </>
  )
}

export default Main