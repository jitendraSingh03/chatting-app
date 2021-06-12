import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core'
import { auth ,provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn= ()=>{
        console.log("ee")
        // e.preventDefault();      
        auth.signInWithPopup(provider)
        .then(result =>{
            console.log(result)
            dispatch({
                type:actionTypes.SET_US,
                user:result.user,
            })
        })
        .catch((err) =>{
            alert(err.message);
        })

        
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.websiteplanet.com/wp-content/themes/websiteplanet/img/compressor/image1.png" alt="fsdfs" />
            
                <h1>Sign in to js Developer chat sever</h1>
                <p>jsDeveloper.slack.com</p>
                <Button onClick={signIn}>Sign in from google</Button>
            </div>
        </div>
    )
}

export default Login
