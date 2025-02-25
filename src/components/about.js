import React from 'react';
import me from "../assets/isa1.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="tagline">learn more about me!</h2>
      <div className="about-content">
        <div className="image-container">
          <img src={me} alt="Isabelle" loading="eager" />
        </div>
        <div className="text-container">
          <ul className="about-list">
            <li><span>My name is Isabelle. I am currently pursuing my software engineering degree at Western University.</span></li>
            <li><span>I have worked on projects in many different areas of software engineering, including full stack web development, machine learning and autonomous systems, game development, and more.</span></li>
            <li><span>Some of my personal hobbies include Formula 1, drawing and reading, skiing, yoga, video games, and spending time with friends / family!</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
