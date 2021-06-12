import React from 'react';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './Chat.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';
function Chat() {
    const {roomId}=useParams();
    const [roomDetails, setroomDetails] = useState(null);
    const [rooomMessages,setroomMessages]= useState([]);
    useEffect(() => {
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot((spanshot) =>(
                setroomDetails(spanshot.data())
           ))
       }
       db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(
        (snapshot)=> setroomMessages(snapshot.docs.map(doc =>doc.data()))
       )
    }, [roomId])
    console.log('message>>>',rooomMessages)
    return (
        <div className='chat'>
             <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong> #{roomDetails?.name}</strong>
                        <StarBorderIcon/>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p className="">
                        <InfoOutlinedIcon/>Detail
                    </p>
                </div>  
            </div>
            <div className="Chat_masseages">
                {/* message bunch */}
                {rooomMessages.map(({ message,timestamp,username,userimg}) =>(
                    <Message message={message} timestamp={timestamp} username={username} userImg={userimg}/>
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )   
}



export default Chat
