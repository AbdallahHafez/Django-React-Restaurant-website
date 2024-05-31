import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='mainPage-section'>
      <div className='mainPage-content'>
        <p className='mainPage-p'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique rem, qui quam iste voluptatum necessitatibus eaque optio ipsam illo debitis!
        </p>
        <div className='mainPage-btn'>
            <Link to='/foods'><button className='btn btn-primary' >Our Menu</button></Link>
            <Link  to='/reservation'> <button className='btn btn-primary'>Reserve Table</button></Link>
           
        </div>
      </div>
    </div>
  )
}

export default Main
