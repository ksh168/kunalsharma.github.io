import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import '../styles/home.css';

const Home = () => {
  const { greeting, description, changeText, technicalSkills, hobbies } = data.home;
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const iconMapping = {
    'Spring Boot': 'spring',
    'AWS': 'amazonwebservices',
    'PySpark': 'apache',
    'Airflow': 'apacheairflow',
    'Kafka': 'apachekafka',
  };

  useEffect(() => {
    const text = changeText[currentTextIndex];
    let timer;

    if (isTyping) {
      if (displayText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 40);
      } else {
        // Wait for 2 seconds before starting to erase
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, 15);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % changeText.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentTextIndex, changeText]);

  return (
    <div className="home-container">
      <header className="animate-fade-in">
        <div className="header-content">
          <img src="/avatar.jpeg" alt="Avatar" className="avatar" />
          <div className="header-text">
            <h1>{greeting}</h1>
            <p className="description large-text">{description}</p>
            <p className="changing-text"><strong>{displayText}</strong><span className="cursor">|</span></p>
          </div>
        </div>
      </header>

      <section className="skills-section animate-fade-in">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            category !== 'skillNameMapping' && (
              <div key={category} className="skill-category">
                <h3>{technicalSkills.skillNameMapping[category] || category}</h3>
                <div className="skill-list">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {iconMapping[skill] !== null && (
                        <i className={`devicon-${iconMapping[skill] || skill.toLowerCase()}-plain`}></i>
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      <section className="hobbies-section animate-fade-in">
        <h2>Hobbies</h2>
        <div className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <span key={index} className="hobby-item">{hobby}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;