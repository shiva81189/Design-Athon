import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';
import {Grid} from '@material-ui/core'

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=> {
                history.push('/home');
            })
            .catch((e)=>alert(e.message));
    }
    const register = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=> {
            history.push('/home');
        })
        .catch((e)=>alert(e.message))
    }
    return (
        <div className='login'>
            <Grid container spacing={3} >
                <Grid item md={4} lg={4}  />
                <Grid item xs={12} md={4} lg={4}>

                    <div className='login_container'>
                        <h1>Sign in</h1>
                        <form>
                            <h5>E-mail</h5>
                            <input value={email} onChange={e => setEmail(e.target.value)} type='email'></input>
                            <h5>Password</h5>
                            <input value={password} type='password' onChange={e => setPassword(e.target.value)}></input>
                            <button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
                        </form>
                        <button onClick={register} className='login_registerButton'>Create your Designathon Account</button>
                    </div>
                </Grid>
                <Grid item lg={4} md={4}/>
            </Grid>
        </div>
    )
}

export default Login
