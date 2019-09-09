import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ title, embed }) => ( 
  <div className="vide-container">
    <iframe
      className="player"  
      title={title}
      type="text/html"
      width="100%"
      height="400px"
      src={embed}
      frameBorder="0"
    />
  </div>
);

Video.propTypes = {
  title: PropTypes.string.isRequired,
  embed: PropTypes.string.isRequired
};

export default React.memo(Video);