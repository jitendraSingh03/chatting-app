import React from 'react';
import './Message.css';
import { useStateValue } from './StateProvider';
function Message({ message,timestamp,username,userImg}) {
    
    const [{user}]=useStateValue();
    console.log("user>>>",user.displayName==username)
    return (
        <div className={`message ${(user.displayName==username) && 'left_msg'}`}>
            <img src={userImg} alt="not found" />
            <div className="message__info">
                <h4>{username} <span className='message__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>  
    )
}

export default Message
