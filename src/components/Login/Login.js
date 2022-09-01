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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Discord_white_D.svg/91px-Discord_white_D.svg.png?20180117191712" alt="Disclone logo" />
        </div>

        <Button onClick={signIn}>Sign In</Button>

    </div>
  )
}

export default Login