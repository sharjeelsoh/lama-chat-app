import React from 'react';
import userImg from '../img/user.png';

const Chats = () => {
  return (
    <div className='chats'>

      <div className="userChat">
        <img src={userImg} alt='' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={userImg} alt='' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={userImg} alt='' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>
        </div>
      </div>

    </div>
  )
}

export default Chats
