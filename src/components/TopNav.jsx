import React from 'react'
import './TopNav.css'
import { Link, NavLink } from 'react-router-dom'
import companyLogo from './../images/ashok.png';

export const TopNav = () => {
  return (
    <div className='navbar'>
      <div id='logo'> <img src={companyLogo} alt="BigCo Inc. logo"/> </div>
      <div className='nav'>
          <Link to="/Home">Home</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Experience">Experience</Link>
          <Link to="/Project">Project</Link>
      </div>

    </div>
  )
}
export default TopNav