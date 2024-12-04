import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/f1.jpeg";

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software Engineering Student", "Web Developer", "Game Developer" ];
    const period = 2000;

    useEffect(() => {
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
                <span className="tagline">Welcome to my portfolio.</span>
                <h1 className="">{`Hi, I'm Isabelle! I am a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineering Student", "Web Developer", "Game Developer" ]'><span className="wrap">{text}</span></span></h1>
            </div>
            <div className="image-container">
              <img src={logo}></img>
            </div>
        </div>
    </section>
  );
};

export default Home;