import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const navigate=useNavigate()
  const createUser=async()=>{
    let resp= await fetch('http://127.0.0.1:8000/api/reservation/user/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({username,email,password})
    })
    let data=await resp.json()
    if(resp.status===201){
      navigate('/login')
    }else{
      console.log(data)
      alert('Something went wrong! try another name')
    }

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    createUser()
  }
  return (
    <div className='auth-container'>
      <h3>SignUp</h3>
      <form className='auth-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Name' value={username} className='form-input' onChange={(e)=>setUsername(e.target.value)} />
        <input type='email' placeholder='Enter Your Email' value={email} className='form-input' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password'placeholder='Enter Your password' value={password} className='form-input' onChange={(e)=>setPassword(e.target.value)} />
        <input type='submit' style={{'width':'100px'}} value='Register' className='form-input btn btn-primary'/>
      </form>
      <p>already have an account?<Link to='/login'> Login</Link></p>
    </div>
  )
}

export default SignUp
