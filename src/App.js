import React, { useState, useEffect } from 'react';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState(() => {
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
  });
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  const handleAddVideo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newVideo = {
        id: Date.now(),
        name: file.name,
        url: URL.createObjectURL(file),
        bookmarked: false,
      };
      setVideos([...videos, newVideo]);
    }
  };

  const handleToggleBookmark = (id) => {
    const updatedVideos = videos.map((video) =>
      video.id === id ? { ...video, bookmarked: !video.bookmarked } : video
    );
    setVideos(updatedVideos);
  };

  const handleRemoveVideo = (id) => {
    const updatedVideos = videos.filter((video) => video.id !== id);
    setVideos(updatedVideos);
  };

  const handlePlayVideo = (video) => {
    setCurrentVideo(video);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setCurrentVideo(null);
  };

  const filteredVideos = filter ? videos.filter(video => video.bookmarked) : videos;

  return (
    <div className="App">
      <h1>Video Library</h1>
      <div className="controls">
        <input type="file" accept="video/*" onChange={handleAddVideo} />
        <button onClick={() => setFilter(!filter)}>
          {filter ? 'Show All Videos' : 'Show Bookmarked Videos'}
        </button>
      </div>
      <VideoList videos={filteredVideos} onPlay={handlePlayVideo} onToggleBookmark={handleToggleBookmark} onRemove={handleRemoveVideo} />
      {isPlayerOpen && <VideoPlayer video={currentVideo} onClose={handleClosePlayer} />}
    </div>
  );
};

export default App;
