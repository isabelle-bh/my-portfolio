import React from 'react';
import me from "../assets/isa1.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="tagline">Learn more About Me!</h2>
      <div className="about-content">
        <div className="image-container">
          <img src={me} alt="Isabelle" />
        </div>
        <div className="text-container">
          <ul className="about-list">
            <li><span>My name is Isabelle. I am currently pursuing my software engineering degree at Western University!</span></li>
            <li><span>I have touched on many different fields of SWE, including full stack web development, reinforcement learning in autonomous vehicles, game development, and more...</span></li>
            <li><span>Some of my hobbies include Formula 1, drawing and reading, yoga, video games, and spending time with friends / family!</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
