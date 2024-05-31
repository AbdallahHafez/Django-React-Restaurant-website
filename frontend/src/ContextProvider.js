import React, { useEffect } from 'react'
import { useContext,useState,createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AppContext =createContext()

const ContextProvider = ({children}) => {
  const [isAuthorized,setIsAuthorized]=useState(null)
  const[allFood,setAllFood]=useState([])
  const [food,setFood]=useState(null)
  const [modal,setModal]=useState(false)
  const[query,setQuery]=useState("")

  const getAllFood= async(query='')=>{
    let resp= await fetch(`http://127.0.0.1:8000/api/food_list/?query=${query}`)
    let data=await resp.json()
    setAllFood(data)
    
  }

  const getFood=async(id)=>{
    let res= await fetch(`http://127.0.0.1:8000/api/food_detail/${id}`)
    let data = await res.json()
    setFood(data)
  }

  useEffect(()=>{
    getAllFood(query)
  },[query])
  
  const logout=()=>{
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    setIsAuthorized(false)
  }

  return (
    <AppContext.Provider value={{
      allFood,getFood,query,food,
      setModal,modal,setFood,setQuery,
      getAllFood,isAuthorized,setIsAuthorized,logout
      }}>
      {children}
    </AppContext.Provider>
  )
}
export {AppContext}
export default ContextProvider
