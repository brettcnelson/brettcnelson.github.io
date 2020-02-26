import React from 'react';
import './Contact.css';
import Section from './Section.jsx';
import { icons } from './data.js';

const icon = (i,j) => (
  <div key={j}>
    <a className="icon" href={i.href} target="_blank" rel="noopener noreferrer">
      <i className={i.class} title={i.text}>{i.text}</i>
    </a>
  </div>
);

export default () => (
  <Section id="Contact">
    <div className="title">
      <h1>Brett Nelson</h1>
      <h2 className="sub">fullstack web dev</h2>
    </div>
    <div>
      <div className="con-con">
        <div className="icon-con">
          {icons.map(icon)}
        </div>
      </div>
    </div>
  </Section>
);
