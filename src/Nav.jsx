import React from 'react';
import './Nav.scss';

const sections = [ 'Contact','Skills','Portfolio' ];

export default () => {
  function anchor(s,i) {
    return (<li key={i}><a className="smooth" href={'#'+s}>{s}</a></li>);
  }
  return (
    <nav className="nav">
      <ul>
        {sections.map(anchor)}
      </ul>
    </nav>
  );
}
