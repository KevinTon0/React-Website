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
        <p>LinkedIn: {contact.linkedin}</p>
        <p>GitHub: {contact.github}</p>
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
