import React from 'react';

function Video() {
  return (
    <div className="video-container blur-sm">
      <video autoPlay loop muted>
        <source src="./src/assets/imageAndVideo/27239-362518579_tiny.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;