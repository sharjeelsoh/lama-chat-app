import React from 'react'
import userImg from '../img/user.png';

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src={userImg} alt='' />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
