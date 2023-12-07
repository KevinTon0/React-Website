// Resume.js
import React from 'react';
import resumeData from './resume.json';

const Resume = () => {
  const { name, title, contact, education, skills } = resumeData;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>

      <div>
        <h3>Contact Information</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        {/* Make LinkedIn and GitHub links clickable */}
        <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedin}</a></p>
        <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">{contact.github}</a></p>
      </div>

      <div>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}</p>
            <p>{edu.school}, {edu.year}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
