import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../ContextProvider'
const SearchFood = () => {
  const {query,setQuery,getAllFood}=useContext(AppContext)
  const submitSearchForm=(e)=>{
    e.preventDefault()
    setQuery(e.target[0]['value'])
  }
  return (
    <div className='search-container'>
      <form method='GET' className='search-form' onSubmit={submitSearchForm}>
        <input type='text' name='query' placeholder='Search food...'/>
        <input type='submit' value='Search' className='btn btn-primary btn-search'/>
      </form>
    </div>
  )
}

export default SearchFood
