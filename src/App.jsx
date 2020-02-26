import React from 'react';
import './App.scss';
import Nav from './Nav.jsx';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';

export default () => (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Contact />
      <Skills />
      <Portfolio />
    </main>
    <footer>
      &copy; 2020 ~ Brett Nelson
    </footer>
  </div>
);
