import React from 'react'
import SearchFood from '../components/SearchFood'
import { useContext } from 'react'
import { AppContext } from '../ContextProvider'
const FoodPage = () => {
  const{allFood,getFood,setModal}=useContext(AppContext)
  const showFood=(id)=>{
    getFood(id)
    setModal(true)
  }  
  return (
    <div className='container'>
        <SearchFood/>
        <div className='food-container'>
            {allFood.map((food,index)=>{
                const{id,image,name,vegetarian,price}=food
                return(
                    <div key={index} className='food-card'>
                        <div className='food-card-img'>
                          <img src={`http://127.0.0.1:8000${image}`}></img>  
                        </div>
                        <div className='food-card-details'>
                            <h2 className='food-card-header'>
                            <small>{name}</small>
                            {vegetarian?<small className='vegeterian'>vegetarian</small>:<small></small>} 
                            </h2>
                            <hr/>
                            <div className='food-view-price'>
                                <button className='btn btn-primary' onClick={()=>showFood(id)}>View</button>
                                <small>{price} $</small>
                            </div>
                                                        
                        </div> 
                    </div>
                )
            })}
      </div>
    </div>
  )
}

export default FoodPage
