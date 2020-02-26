import React from 'react';
import './Contact.scss';
import Section from './Section.jsx';
import Badge from './Badge.jsx';
import { techIcons, contactIcons } from './data.js';

const icon = (i,j) => (
  <div key={j}>
    <a className="icon" href={i.href} target="_blank" rel="noopener noreferrer">
      <i className={i.class} title={null}></i><span>{' ' + i.text}</span>
    </a>
  </div>
);

const badge = {__html:'<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@balazsbusznyak?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Balazs Busznyak"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Balazs Busznyak</span></a>'};

export default () => (
  <Section id="Contact">
    <div className="card">
      <div className="cover-card"></div>
      <h1>Brett Nelson</h1>
      <div className="tech-con">
        {techIcons(2).map((i,j) => <i key={j} className={i}></i>)}
      </div>
      <h2 className="sub">fullstack web dev</h2>
      <div className="card-icon-con">
        {contactIcons(2).slice(0,2).map(icon)}
      </div>
    </div>
    <div>
      <div className="icon-con-con">
        <div className="icon-con">
          {contactIcons(2).slice(2).map(icon)}
        </div>
      </div>
    </div>
    <Badge badge={badge}/>
  </Section>
);
