import React from 'react';
import myResume from "../assets/Isabelle-Beaudry-Resume-24.pdf"; 

const Resume = () => {
  return (
    <section className="resume">
      <h2 className="tagline">Check out my resume and experience.</h2>
      <div className="resume-content">
        <embed
          src={myResume}
          type="application/pdf"
          width="60%"
          height="600px"
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>
    </section>
  );
};

export default Resume;
