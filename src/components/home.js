import React from 'react';
import { useState, useEffect } from "react";
import logo from "../assets/f1.jpeg";

function reflectiveText() {
  const elements = document.querySelectorAll("[data-reflect]");
  if (!elements.length) return;

  for (const element of elements) {
    element.addEventListener('mousemove', (event) => {
      const rect = element.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      element.style.setProperty("--mx", `${mx}px`);
      element.style.setProperty("--my", `${my}px`);
    });
  }
}

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "a software engineering new graduate", "a web developer", "an iOS app developer", "a unity game developer" ];
    const period = 2000;
    
    useEffect(() => {
        reflectiveText();
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(200);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

  return (
    <section className="home" id="home">
        <div className="content">
            <div className="text-container">
                <span className="tagline" data-reflect>My name is Isabelle!</span>
                <h1 className="">{`I am `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "a Software Engineering New Graduate", "a Web Developer", "an iOS App Developer", "a Unity Game Developer" ]'><span className="wrap">{text}</span></span></h1>
            </div>
            <div className="image-container">
              <img src={logo}></img>
            </div>
        </div>
    </section>
  );
};

export default Home;