import React, { useState } from 'react';
import myResume from "../assets/Isabelle-Beaudry-Resume-25.pdf"; 

const Resume = () => {
  const [isError, setIsError] = useState(false);

  // Handle error in loading PDF
  const handleError = () => {
    setIsError(true);
  };

  return (
    <section className="resume">
      <h2 className="tagline">check out my resume and experience!</h2>
      <div className="resume-content">
        {isError ? (
          <div>
            <p>Sorry, my resume is not loading right now. 
               You can <a href={myResume} target="_blank" rel="noopener noreferrer">view it here</a>.</p>
          </div>
        ) : (
          <embed
            src={myResume}
            type="application/pdf"
            width="60%"
            height="600px"
            style={{ display: "block", margin: "0 auto" }}
            onError={handleError}  // Trigger the error handler if the embed fails
          />
        )}
      </div>
    </section>
  );
};

export default Resume;
