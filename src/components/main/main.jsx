import React from 'react'
import Cards from '../card/cardContainer'
import FilterButtons from '../filter-buttons/buttonGroup'
import { useState } from 'react'

const Main = () => {
  const [filter,setFilter] = useState({})
  return (
    <>
    <FilterButtons setFilter={setFilter} />
    <Cards filter={filter} />
    </>
  )
}

export default Main