import React from 'react'
import './Loading.css'
import '../Resources/tomato1.png'

const Loading = () => {

    return (
        <div className='loading-message'>
            <img className='tomato-image' id='tomato-1' src='https://toppng.com/public/uploads/thumbnail/green-tomato-cartoon-115496727097vw6f4by8k.png' alt='happy larry tomato'/>      
        <h2>Loading ...</h2>
        {//<div class="tenor-gif-embed" data-postid="21977363" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/tomato-spin-gif-21977363">Tomato Spin GIF</a> from <a href="https://tenor.com/search/tomatospin-gifs">Tomatospin GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        }
        <img id='loading-gif' src='https://media.giphy.com/media/eg7NbI9e4UN9e/giphy-downsized.gif' alt='spinning tomatoes on a platter'/>
        {//<img src='' />
        //<div class="tenor-gif-embed" data-postid="13072790" data-share-method="host" data-width="100%" data-aspect-ratio="1.45"><a href="https://tenor.com/view/tomato-dance-gif-13072790">Tomato Dance GIF</a> from <a href="https://tenor.com/search/tomato-gifs">Tomato GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        }
        </div>
    )

}

export default Loading;