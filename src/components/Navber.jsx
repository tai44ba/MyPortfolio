import React from 'react'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <nav>
        <ul className='list-none flex justify-end'>
          <li className='m-5'><NavLink to='/home'>Home</NavLink></li>
          <li className='m-5'><NavLink to='/about'>About Me</NavLink></li>
          <li className='m-5'><NavLink to='/project'>Project</NavLink></li>
          <li className='m-5'><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navber