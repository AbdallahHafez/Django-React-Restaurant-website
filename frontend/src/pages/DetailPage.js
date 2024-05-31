import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../ContextProvider'
const DetailPage = () => {
  const {food,setModal,setFood}=useContext(AppContext)
  const closeModal=()=>{
    setFood(null)
    setModal(false)
  }
  return (
    <div className='food-modal-container'>
        
            {food && (
            <div className='food-modal'>
                <img src={`http://127.0.0.1:8000${food.image}`}/>
                <h2>{food.name}</h2>
                <hr className='modal-separator' />
                <hr className='modal-sec-separator'/>
                <div className='modal-price-veg'>
                  <p>$ {food.price}</p>
                  {food.vegetarian?<small className='vegeterian'>vegetarian</small>:<small></small>} 
                </div>

                <p >{food.ingredients}</p>
                <p>{food.preparation}</p>
                <button onClick={closeModal} className='btn btn-danger'>Close</button> 
            </div>               
            )}

    </div>
  )
}

export default DetailPage
