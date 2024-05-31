import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppContext } from '../ContextProvider'
const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const {setIsAuthorized}=useContext(AppContext)
  const getTokens=async()=>{
    let resp= await fetch('http://127.0.0.1:8000/api/token/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({username,password})
    })
    let data=await resp.json()
    if(resp.status===200){
      localStorage.setItem('access',data.access)
      localStorage.setItem('refresh',data.refresh)
      setIsAuthorized(true)
      navigate('/')
    }else{
      console.log(data)
      alert('Try to register first')
    }

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    getTokens()
  }
  return (
    <div className='auth-container'>
      <h3>Login</h3>
      <form className='auth-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Name' value={username} className='form-input' onChange={(e)=>setUsername(e.target.value)} />
        <input type='password'placeholder='Enter Your password' value={password} className='form-input' onChange={(e)=>setPassword(e.target.value)} />
        <input type='submit' style={{'width':'100px'}} value='Login' className='form-input btn btn-primary'/>
      </form>
      <p>have no account?<Link to='/signup'> Register</Link></p>
    </div>
  )
}

export default Login
