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
            <li><span>My name is Isabelle. I have recently graduated with a Bachelors in Engineering Science, majoring in Software engineering.</span></li>
            <li><span>I have worked on projects in many different areas of software engineering, including full stack web development, game development, iOS app development, machine learning and autonomous systems, and more.</span></li>
            <li><span>I currently work as a web developer at a small company, and I am simultaneously volunteering for Toronto Climate Week as a web developer.</span></li>
            <li><span>Some of my passions include Formula 1, drawing, reading, yoga, video games, and spending time with friends / family!</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
