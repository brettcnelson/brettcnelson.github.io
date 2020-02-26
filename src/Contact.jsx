import React from 'react';
import './Contact.css';
import Section from './Section.jsx';
import { contactIcons, icons } from './data.js';

const icon = (i,j) => (
  <div key={j}>
    <a className="icon" href={i.href} target="_blank" rel="noopener noreferrer">
      <i className={i.class} title={null}></i><span>{' ' + i.text}</span>
    </a>
  </div>
);

export default () => (
  <Section id="Contact">
    <div className="card">
      <div className="cover-card"></div>
      <h1>Brett Nelson</h1>
      <i className={icons(2).code}></i>
      <h2 className="sub">
        {/* <pre><code> */}
          fullstack web dev
          {/* </code></pre> */}
          </h2>
      <div className="card-icon-con">
        {contactIcons(2).slice(0,2).map(icon)}
      </div>
    </div>
    <div className="icon-con">
      {contactIcons(2).slice(2).map(icon)}
    </div>
  </Section>
);
