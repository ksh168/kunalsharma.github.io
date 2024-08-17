import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import '../styles/experience.css';
import { formatBoldText } from '../utils/util';

function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        setExperience(data.experience);
    }, []);

    return (
        <div className="page-container animate-fade-in">
            <h1 className="page-title">Experience</h1>
            {experience.map((exp) => (
                <div key={exp.company} className="card">
                    <div className="card-header company-header">
                        <img
                            src={exp.logoPath}
                            alt={`${exp.company} logo`}
                            className="company-logo"
                        />
                        <h2 className="card-title">
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                                {exp.company}
                            </a>
                        </h2>
                    </div>
                    <div className="card-info-container">
                        <div className="card-info-left">
                            <h3 className="card-subtitle">{exp.role}</h3>
                            {exp.team && (
                                <p className="card-team">
                                    {exp.teamUrl ? (
                                        <a href={exp.teamUrl} target="_blank" rel="noopener noreferrer">
                                            {exp.team}
                                        </a>
                                    ) : (
                                        exp.team
                                    )}
                                </p>
                            )}
                        </div>
                        <div className="card-info-right">
                            <p className="card-details">{exp.duration}</p>
                            {exp.location && <p className="card-location">{exp.location}</p>}
                        </div>
                    </div>
                    {exp.techStack && (
                        <div className="tech-stack">
                            <h4>Tech Stack:</h4>
                            <p>{exp.techStack.join(', ')}</p>
                        </div>
                    )}
                    <ul className="list-item-details">
                        {exp.tasks.map((task, index) => (
                            <li key={index} className="list-item-detail">{formatBoldText(task)}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Experience;