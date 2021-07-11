import React from 'react'
import PropTypes from 'prop-types';
import './MovieTrailer.css'

const MovieTrailer = ({ movieKey }) => (
  <div className="video-responsive">
    <iframe
      // width="853"
      // height="480"
      src={`https://www.youtube.com/embed/${movieKey}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

MovieTrailer.propTypes = {
  movieKey: PropTypes.string.isRequired
};

export default MovieTrailer;