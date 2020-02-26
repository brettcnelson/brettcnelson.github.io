import React from 'react';
import './App.css';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';

const sections = [ 'Contact','Skills','Portfolio' ];

export default () => (
  <div className="App">
    <header>
      <nav className="nav">
        <ul>
          {sections.map((s,i) => (
            <li key={i}><a className="smooth" href={'#'+s}>{s}</a></li>
          ))}
        </ul>
      </nav>
    </header>
    <Contact />
    <Skills />
    <Portfolio />
    <footer>
      &copy; 2020 ~ Brett Nelson
    </footer>
  </div>
);
