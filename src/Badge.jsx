import React from 'react';
import './Badge.scss';

export default ({badge}) => ( <div className="badge" dangerouslySetInnerHTML={badge}></div> );
