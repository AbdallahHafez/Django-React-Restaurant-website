import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../ContextProvider'
import List from '../images/list.svg'
const Headers = () => {
  const {isAuthorized,logout}=useContext(AppContext)
  const toggle =useRef()
  const toggleNav=()=>{
    toggle.current.classList.toggle('hidden')
  }
  return (
    <nav>
      <div className=' flexing navbar'>
        <div className='left-navbar'>
          <h2>FoodKing</h2>  
        </div>
        <div className='right-navbar'>
            <ul className='flexing' ref={toggle}>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/foods' className='link'>Food</Link>
                </li>
                <li>
                    <Link to='/reservation' className='link'>Reservation</Link>
                </li>
                {!isAuthorized&&
                <li>
                    <Link to='/signup' className=' btn btn-primary btn-sign'>Sign Up</Link>
                </li>}
                {isAuthorized&&
                <li>
                    <button  className=' btn btn-primary btn-sign' onClick={logout}>Logout</button>
                </li>}
              </ul>  
              <button className='toggle-btn' onClick={toggleNav}><img src={List}/></button>
               
                  
            
        </div>
      </div>
    </nav>
  )
}

export default Headers
