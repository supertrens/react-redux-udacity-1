import React from 'react'

const VideoDetail = ({video}) =>{

//If the data is still fetchin and we dotn have any video yet
//we jsut  return loading
  if(!video){
    return(
      <p> Loading.... </p>
    );
  }
  // ELSE get the id of each video
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className='video-detail col-md-8'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className ="embed-responsive-item" src={url}> </iframe>
      </div>
      <div className = "details">
        <div> {video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
