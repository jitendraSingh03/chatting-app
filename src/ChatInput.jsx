import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatInput.css'
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';

function ChatInput({channelName,channelId}) {
    const [input,setInput]=useState();
    const [{ user }]=useStateValue();
    const sendMessage=(e)=>{
        e.preventDefault();
        if(channelId){
           
            db.collection('rooms').doc(channelId).collection('messages').add(
                {message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                username:user.displayName,
                userimg:user.photoURL,
            }
           
            )
        }
        setInput('')
        
        

    }
    return (
        <div className='chatInput'>
            <form>
                <input value={input} onChange={e=>setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`}></input>
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput;
