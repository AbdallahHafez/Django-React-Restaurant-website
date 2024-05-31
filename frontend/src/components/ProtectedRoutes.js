import { jwtDecode } from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../ContextProvider'

const ProtectedRoutes = ({children}) => {
    const {isAuthorized,setIsAuthorized}=useContext(AppContext)
    useEffect(()=>{
        auth()
    },[])

  const refreshToken= async () =>{
    const refresh=localStorage.getItem('refresh')    
    let resp = await fetch('http://127.0.0.1:8000/api/token/refresh/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({'refresh':refresh})
    }       
    )
    let data=await resp.json()
    if (resp.status===200){
        localStorage.setItem('access',data.access)
        setIsAuthorized(true)
    }else{
        setIsAuthorized(false)
    }

  }


  const auth= async () => {
    const access=localStorage.getItem('access')
    if(!access){
        setIsAuthorized(false)
        return
    }
    const decoded=jwtDecode(access)
    const tokenExp=decoded.exp
    const now=Date.now() /1000
    if(tokenExp < now){
        await refreshToken()
    }else{
        console.log('iam here')
        setIsAuthorized(true)
        console.log(isAuthorized)
    }
  }
  if (isAuthorized===null){
    return <div>loading..</div>
  }
  return isAuthorized ? children : <Navigate to="/login" />;
    
}

export default ProtectedRoutes
