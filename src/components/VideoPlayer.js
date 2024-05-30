import React from 'react';
import Modal from 'react-modal';
import './VideoPlayer.css';

Modal.setAppElement('#root');

const VideoPlayer = ({ video, onClose }) => {
  return (
    <Modal isOpen={!!video} onRequestClose={onClose} contentLabel="Video Player">
      {video && (
        <div className="video-player">
          <video controls src={video.url} />
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default VideoPlayer;
