import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import '../Resources/tomato1.png'

const Error = (props) => {

    return (
        <div className='error'>         
            <Link to ='/'>
                {
                    //put an error status code up in here!
                }
                {
                    //<h2>{props.type}</h2>
                }
                <h3 className='error-message'>Something went wrong. Click here to be redirected.</h3>
            </Link>
            <img className='error-gif' id='error-gif' src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif' alt='disappointed animated tomato'/>
        </div>
    )

}

export default Error;