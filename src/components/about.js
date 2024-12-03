import React from 'react';
import me from "../assets/me.jpeg";

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
            <li><span>Hello, my name is Isabelle.</span></li>
            <li><span>I am currently pursuing my software engineering degree at Western University!</span></li>
            <li><span>I have touched on many different fields of SWE, including full stack web development, reinforcement learning in autonomous vehicles, game development, and more...</span></li>
            <li><span>Some of my hobbies include art, reading, exercising, video games, and spending time with friends / family!</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
