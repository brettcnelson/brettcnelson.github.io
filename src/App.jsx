import React from 'react';
import './App.css';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('.nav a[href*="#"]',{
  speed:1000
});

export default () => (
  <div className="App">
    <nav className="nav">
      <ul>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
      </ul>
    </nav>
    <Contact />
    <About />
    <Portfolio />
  </div>
);
