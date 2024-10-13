import React from 'react';
import BGVideo from '../assets/imageAndVideo/27239-362518579_tiny.mp4'

function Video() {
  return (
    <div className="video-container blur-sm">
      <video autoPlay loop muted>
        <source src={BGVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;