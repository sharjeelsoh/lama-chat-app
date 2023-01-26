import React from 'react'
import userImg from '../img/user.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={userImg} alt='' />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
