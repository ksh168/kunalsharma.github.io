import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import data from '../data/data.json';
import '../styles/projects.css';
import { formatBoldText } from '../utils/util';

const Modal = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <img src={image} alt="Project demo" className="modal-content" onClick={e => e.stopPropagation()} />
      <span className="modal-close" onClick={onClose}>&times;</span>
    </div>,
    document.body
  );
};

const Projects = () => {
  const [playingVideos, setPlayingVideos] = useState({});
  const [modalImage, setModalImage] = useState(null);

  const isVideoFile = (filename) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  };

  const handlePlayClick = (index) => {
    setPlayingVideos(prev => ({...prev, [index]: true}));
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="page-container projects-page animate-fade-in">
      <h1 className="page-title">My Projects</h1>
      <div className="project-grid">
        {data.projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h2 className="card-title">{project.title}</h2>
            <ul className="list-item-details">
              {project.description.map((item, i) => (
                <li key={i} className="list-item-detail">{formatBoldText(item)}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.sourceCode && (
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project-link">
                  Source Code
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
            {project.demoVideo && (
              <div className="project-demo-container">
                {isVideoFile(project.demoVideo) ? (
                  playingVideos[index] ? (
                    <video src={project.demoVideo} controls autoPlay className="project-demo">
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="video-placeholder" onClick={() => handlePlayClick(index)}>
                      <button className="play-button" aria-label={`Play ${project.title} demo video`}>
                        ▶
                      </button>
                    </div>
                  )
                ) : (
                  <img 
                    src={project.demoVideo} 
                    alt={`${project.title} demo`} 
                    className="project-demo" 
                    onClick={() => openModal(project.demoVideo)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default Projects;