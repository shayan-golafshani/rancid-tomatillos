import React from 'react'
import './Loading.css'
import '../Resources/tomato1.png'

const Loading = () => {

    return (
        <div className='loading'>
            <h2 className='loading-message'>Loading ...</h2>
            <img className='tomato-image' id='tomato-1' src='https://toppng.com/public/uploads/thumbnail/green-tomato-cartoon-115496727097vw6f4by8k.png' alt='happy larry tomato'/>      
        </div>
    )

}

export default Loading;