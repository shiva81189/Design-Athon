import React from 'react'
import './Welcome.css'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

function Welcome() {

    return (
        <div className='welcome'>
            <h1>Design-Athon</h1>
            <Link className='link' to='/login'>
                <Button className='btn' variant='contained' color='primary'>Get Started</Button>
            </Link>
        </div>
    )
}

export default Welcome
