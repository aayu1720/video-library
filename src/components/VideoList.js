import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos, onPlay, onToggleBookmark, onRemove }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onPlay={onPlay} onToggleBookmark={onToggleBookmark} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default VideoList;
