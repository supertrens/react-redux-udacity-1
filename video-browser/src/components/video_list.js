import React from 'react';

import VideoListItem from './video_list_item';

const VideoList =(props) =>{
  const {videos , onSelectedVideo} = props;

//create a li array

  return(
    <div>
      <ul className="col-md-4 list-group">
        { videos.map((video) =>
          <VideoListItem
            key={video.etag}
            video={video}
            onSelectedVideo={onSelectedVideo}
           />
        )}
      </ul>
    </div>
  );
};
export default VideoList;
