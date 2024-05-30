import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onPlay, onToggleBookmark, onRemove }) => {
  return (
    <div className="video-item">
      <p>{video.name}</p>
      <div className="video-actions">
        <button onClick={() => onPlay(video)}>Play</button>
        <button onClick={() => onToggleBookmark(video.id)}>
          {video.bookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
        <button onClick={() => onRemove(video.id)}>Remove</button>
      </div>
    </div>
  );
};

export default VideoItem;
