import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Error.css'
import '../Resources/tomato1.png'

const Error = (props) => {

    return (
        <div className='error-message'>         
            <Link to ='/'>
                {
                    //put an error status code up in here!
                }
                {
                    //<h2>{props.type}</h2>
                }
                <h3>Something went wrong please try again</h3>
            </Link>
            <img id='error-gif' src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif' alt='disappointed animated tomato'/>
        </div>
    )

}

export default Error;