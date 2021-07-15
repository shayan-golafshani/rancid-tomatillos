import React from 'react'
import './Error.css'
import '../Resources/tomato1.png'

const Error = (props) => {

    return (
        <div className='error-message'>         
            <h2>Something went wrong please try again</h2>
            <img id='error-gif' src='https://media.giphy.com/media/KXBtTtm3kB8BO/giphy.gif' alt='disappointed animated tomato'/>
        </div>
    )

}

export default Error;