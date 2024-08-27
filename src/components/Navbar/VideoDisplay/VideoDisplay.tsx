import React from 'react';

function VideoDisplay() {
  return (
    <iframe 
      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frioscajica%2Fvideos%2F507730638370322%2F&show_text=false&width=560&t=0" 
      width="560" 
      height="314" 
      style={{ border: 'none', overflow: 'hidden' }} 
      scrolling="no" 
      frameBorder="0" 
      allowFullScreen={true} 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
}

export default VideoDisplay;