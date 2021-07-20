import PropTypes from 'prop-types';
import React from 'react'
import './MovieTrailer.css'

const MovieTrailer = ({ movieKey }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${movieKey}`}
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