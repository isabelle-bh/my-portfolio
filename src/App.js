import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App bg-light-green flex flex-col min-h-screen varela-round-regular">
        <Header />
        <main>
          <Routes>
            <Route path='/my-portfolio' element={<Home />} />
            <Route path='/my-portfolio/about' element={<About />} />
            <Route path='/my-portfolio/projects' element={<Projects />} />
            <Route path='/my-portfolio/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
