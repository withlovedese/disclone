import { Button } from '@mui/material'
import React from 'react'
import { auth, provider, signInWithPopup } from '../../firebase'
import './Login.css'

function Login() {
    const signIn = () => {
        //google authentication stuff
        signInWithPopup(auth, provider)
        .catch((error) => {
            alert(error.message)
        })
    }
  return (
    <div className='login'>

        <div className="login__logo">
            <img src="./favicon.ico" alt="Disclone logo" />
        </div>

        <Button onClick={signIn}>Sign In</Button>

    </div>
  )
}

export default Login