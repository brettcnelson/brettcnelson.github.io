import React from 'react';
import './Section.css';

export default (props) => (
  <section id={props.name}>
    <div className="cover"></div>
    <div className="content">
      <h1>{props.name}</h1>
      {props.children}
    </div>
  </section>
);
