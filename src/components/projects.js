import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const individualProjectList = [
    {
      name: "Eclipse Game",
      description:
        "A 2D Adventure Platformer, Eclipse! The goal is to reach the end of the level as fast as you can, defeating enemies along the way. Made using Unity / C#. Credits to all assets / tutorials used can be found in the README.",
      link: "https://github.com/isabelle-bh/Eclipse-2D-Platformer",
    },
    {
      name: "Superhero Database",
      description:
        "A full stack MERN superhero database application with login/signup, admin, user management, list creation functionalities, and more.",
      link: "https://github.com/isabelle-bh/Superhero-Database",
    },
  ];

  const groupProjectList = [
    {
      name: "STELLA",
      description:
        "STELLA stands for Simulated Training Environments and Large Learning Autonoma. STELLA is an implementation of an autonomous driving agent trained in simulations. The project will adapt recent techniques into a usable framework and tools for others to adapt and use. This is my group's capstone project and is currently a work in progress!",
    },
    {
      name: "Strawberry Fields",
      description:
        "A top down 2D adventure game where the player takes on the role of a witch who must navigate through the forest to find the ingredients needed to create a potion to save her village. Made using Unity / C#.",
      link: "https://github.com/isabelle-bh/StrawberryShores",
    },
    {
      name: "Women in Science UWO Website",
      description:
        "An interactive React website for the Women in Science club at Western University. Uses React, HTML, CSS, and JavaScript.",
      link: "https://github.com/wisuwo/wis",
      website: "https://www.wisuwo.com",
    },
    {
      name: "Smart Plant Care System",
      description:
        "A smart plant care system that autonomously monitors and manages the watering, light exposure, and nutrient levels of the houseplants, ensuring optimal growth conditions and minimizing human intervention. Made using C.",
      link: "https://github.com/isabelle-bh/Smart-Plant-Care-System",
    },
    {
      name: "Immortal Garden RPG",
      description:
        "The Immortal Garden RPG. The game is set in a medieval world where the player takes on the role of a king/queen who must defend their castle of which is under siege. The castle is known for its beautiful garden, Eden’s Orchard, which contains a rare and valuable tree that produces apples of immortality, “The Tree of Immortality”. Made using Pygame / Python.",
      link: "https://github.com/isabelle-bh/SE2250_TeamProject",
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderProjectList = (projects, startIndex) => (
    <div className="project-grid">
      {projects.map((project, index) => {
        const projectIndex = startIndex + index;
        return (
          <div key={projectIndex} className="project-card">
            <motion.h4
              onClick={() => toggleExpand(projectIndex)}
              initial={{ color: "white" }}
              whileHover={{ color: "#ee73f4", cursor: "pointer" }}
            >
              {project.name}
            </motion.h4>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                expandedProject === projectIndex
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="project-details"
            >
              <p>{project.description}</p>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="github-icon"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 3-.404c1.02.005 2.043.138 3 .404 2.292-1.552 3.3-1.23 3.3-1.23.654 1.653.242 2.873.119 3.176.769.84 1.236 1.91 1.236 3.221 0 4.607-2.807 5.625-5.479 5.921.431.372.815 1.104.815 2.222v3.293c0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="project-link"
                  >
                  <svg
                    fill="#000000"
                    viewBox="0 0 512 512"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z"></path>

                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="projects">
      <h2 className="tagline">Here are my Individual and Group Projects.</h2>
      {renderProjectList(groupProjectList, individualProjectList.length)}
      {renderProjectList(individualProjectList, 0)}
    </section>
  );
};

export default Projects;
