import React from 'react';
import './Section.css';

export default (props) => (
  <section id={props.id}>
    <div className="cover"></div>
    <div className="content">
      {props.children}
    </div>
  </section>
);
