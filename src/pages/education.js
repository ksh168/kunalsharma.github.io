import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import '../styles/education.css';
import { formatBoldText } from '../utils/util';

function Education() {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(data.education);
    }, []);

    return (
        <div className="page-container animate-fade-in">
            <h1 className="page-title">Education</h1>
            {education.map((edu, index) => (
                <div key={index} className="card">
                    <div className="card-header">
                        <img src={edu.logoPath} alt={edu.institution + " logo"} className="institution-logo" />
                        <h2 className="card-title institution-name">
                            <a href={edu.institutionLink}>{edu.institution}</a>
                        </h2>
                        <div className="education-info">
                            <div className="education-left">
                                <span className="card-subtitle">{edu.degree}</span>
                                <span className="card-subtitle">{edu.major}</span>
                            </div>
                            <div className="education-right">
                                <span className="card-details duration">{edu.duration}</span>
                                <span className="card-details location">{edu.location}</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="list-title">Activities & Societies:</h3>
                    {Object.entries(edu.activities).map(([activity, details], index) => (
                        <div key={index} className="list-item">
                            <div className="list-item-title">{activity}</div>
                            <div className="list-item-details">
                                {details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="list-item-detail">{formatBoldText(detail)}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Education;