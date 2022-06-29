import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css';
import './Error404.css'

function Error404() {
    return (
        <div className='page error-404'>
            <ion-icon name="bug-outline"></ion-icon>
            <h1>Error 404</h1>
            <b>Opps ! Invalid Url</b>
            <p>Requested Page Not Found</p>
            <Link className="go-back" to='/'>Go Back</Link>
        </div>

    )
}

export default Error404
