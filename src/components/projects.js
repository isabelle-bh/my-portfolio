import React from 'react';

const Projects = () => {
  const projectList = [
    { name: 'Project 1', description: 'Description of project 1.' },
    { name: 'Project 2', description: 'Description of project 2.' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
