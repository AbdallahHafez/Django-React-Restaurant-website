import React, { useEffect, useState } from 'react'
import Table from '../images/table.jpg'
import Correct from '../images/check-circle.svg'
import { json, useAsyncValue, useNavigate } from 'react-router-dom'

const Reservation = () => {
  const [date,setDate]=useState()
  const [personsNum,setPersonsNum]=useState(Number)
  const[notes,setNotes]=useState('')
  const [reservations,setReservations]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    getReservations()
  },[])
  const getReservations= async()=>{
    let resp=await fetch('http://127.0.0.1:8000/api/reservation/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${String(localStorage.getItem('access'))}`
      },
    })
    let data=await resp.json()

    if (resp.status===200){
      setReservations(data)
    } if (resp.statusText ==='Unauthorized'){
      navigate('/login')
    }   
  }

  const createReservation= async ()=>{
    let resp=await fetch('http://127.0.0.1:8000/api/reservation/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${String(localStorage.getItem('access'))}`
      },
      body:JSON.stringify({date,personsNum,notes})
    })
    let data=await resp.json()
    console.log(resp)
    if (resp.status===201){
      alert('Reservation created succesfully')
      getReservations()
    }
    if (resp.statusText ==='Unauthorized'){
      navigate('/login')
    }
  }

  const deleteReservation =async (id)=>{
    let resp=await fetch(`http://127.0.0.1:8000/api/reservation/delete/${id}/`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${String(localStorage.getItem('access'))}`
      },

    })

    if (resp.status===204){
      alert('Reservation deleted succesfully')
      getReservations()
    }  
    if (resp.statusText ==='Unauthorized'){
      navigate('/login')
    }

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    createReservation()
  }



  return (
    <>
    <div className='reservation-section'>
      <div className='reservation-container flexing'>
        <div className='reservation reservation-left flexing'>
            <h5>Reserve a table</h5>
            <img src={Table} className='table-img'/>
            <div className='reservation-info flexing'>
                <img src={Correct}/>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='reservation-info flexing'>
                <img src={Correct}/>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='reservation-info flexing'>
                <img src={Correct}/>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='reservation-info flexing'>
                <img src={Correct}/>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='reservation-info flexing'>
                <img src={Correct}/>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <div className='reservation reservation-right flexing'>
            <h5>Start Reservation</h5>
            <form className='reservation-form' onSubmit={handleSubmit}>
                <input className='form-input' type='date' value={date} onChange={(e)=>setDate(e.target.value)} />
                <input className='form-input' type='number' value={personsNum} onChange={(e)=>setPersonsNum(e.target.value)} />
                <textarea className='form-input' placeholder='Do you have any notes' value={notes} onChange={(e)=>setNotes(e.target.value)} ></textarea>
                <input className='btn btn-primary'  type='submit' value='Reserve'/>
            </form>
        </div>
      </div>
    </div>
    <div className='user-reservations'>
      <div className='user-reservations-container'>
        <h2>
          Reservations
        </h2>
      
          {reservations?.map((reservation)=>{
            const {id,date,notes,personsNum}=reservation
            return(
            <div className='single-reservation'>
              <p>Date: {date}</p>
              <p>Notes: {notes}</p>
              <p>Chairs: {personsNum}</p>
              <button className='btn btn-danger' onClick={()=>deleteReservation(id)}>Delete</button>
            </div>)
          })}
       
      </div>
    </div>
    </>
  )
}

export default Reservation
