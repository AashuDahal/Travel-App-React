import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
            <FontAwesomeIcon icon={faBars} className='nav--hamicon'/>
            <h1 className='nav--text'>my Travel Journey</h1>
    </div>
  )
}

export default Navbar