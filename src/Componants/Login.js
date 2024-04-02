import React from 'react'

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { ImTwitter } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa6";

import '../App.css'


function Login() {
  return (
    <div className="login">
        <div className='container'>
        <h1>Login</h1>
        <TextField  id="standard-basic" 
        label="UserName" 
        variant="standard" />
        <br></br><br></br>

        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard" 

        />
        <br></br><br></br>
        <Button 
        style={{backgroundColor:'#ab085a', color:'white',textAlign:'center'}}
         variant="contained" 
         disableElevation>
      Continue
    </Button>
        
<br></br><br></br>
        <p>or connect with social media</p>
        <br></br>
        <Button 
        style={{backgroundColor:'SteelBlue', color:'white'}}
        variant="contained" 
        disableElevation>
            <ImTwitter/>&nbsp;
      Sign in with Twitter
    </Button>
    <br></br><br></br>
     <Button 
    
     style={{backgroundColor:'blue', color:'white'}}
     variant="contained" 
     disableElevation>
<FaFacebookF/>&nbsp;
     Sign in with Facebook
    
    </Button>
    </div>
    </div>
  )
}

export default Login