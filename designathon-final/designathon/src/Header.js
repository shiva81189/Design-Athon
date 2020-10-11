import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { db, auth } from './firebase'
import { Button } from '@material-ui/core'



function Header() {

    const [{ user }] = useStateValue();
    const [open, setOpen] = useState(false)


    const login = () => {
        if (user) {
            auth.signOut();
        }
    }



    return (
        <div className='header'>
        
            <div className='header_info'>
                <h1>Design-Athon</h1>
                    <Link to={!user && '/login'} className='header_link'>
                        <div onClick={login} className='header_option'>
                            {user ? (
                                <Button>sign out</Button>
                            ) : (
                                    <Button>sign in</Button>
                                )}
                        </div>
                    </Link>
                </div>
        </div>
    )
}

export default Header
