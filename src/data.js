const icons = (size='') => {
  if (size) {
    size = ` fa-${size}x`;
  }
  return {
    // details:'fas fa-info-circle'+size,
    // YouTube:'fab fa-youtube'+size,
    Site:'fas fa-globe'+size,
    'Chrome Extension':'fab fa-chrome'+size,
    GitHub:'fab fa-github'+size,
    linkedin:'fab fa-linkedin'+size,
    twitter:'fab fa-twitter'+size,
    // dev:'fab fa-dev'+size
    file:'fas fa-file-pdf'+size,
    email:'fas fa-envelope'+size,
    html:'fab fa-html5'+size,
    css:'fab fa-css3'+size,
    js:'fab fa-js-square'+size,
    react:'fab fa-react'+size,
    node:'fab fa-node-js'+size
  }
}

const techIcons = (size) => {
  const { html, css, js, react, node} = icons(size);
  return [ html, css, js, react, node ];
}

const contactIcons = (size) => {
  const fonts = icons(size);
  return [
    {
      text: 'Resumé',
      href: "https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view",
      class: fonts.file
    },
    {
      text: 'Email',
      href: "mailto:brettcnelson@gmail.com",
      class: fonts.email
    },
    {
      text: 'GitHub',
      href: "http://github.com/brettcnelson",
      class: fonts.GitHub
    },
    {
      text: 'LinkedIn',
      href: "http://linkedin.com/in/brettcnelson",
      class: fonts.linkedin
    },
    {
      text: 'Twitter',
      href:'https://twitter.com/_brettcnelson',
      class: fonts.twitter
    },
    // {
    //   text: 'DEV',
    //   href: "https://dev.to/brettcnelson",
    //   class: fonts.dev
    // }
  ]
}

const skills = 'HTML, CSS, Sass, Javascript, JQuery, D3, React, Angular, Ionic, Node, Express, MongoDB, Mongoose, PostgreSQL, Knex, SQLite3, Git, Heroku';

const portfolio = [
  {
    name: 'Viking Conquest',
    desc: 'A location-based territorial strategy game',
    pic:'images/rfsb.png',
    links: [
      {name:'GitHub',url:'https://github.com/trivial-conquest/trivial-conquest'},
      {name:'Site',url:'https://intense-journey-25938.herokuapp.com'}
    ],
    points: [
      'Called Google Maps API to render location-based maps and save user-designated map markers',
      'Configured Ionic framework with Cordova plugins to develop mobile web-focused UI',
      'Created front-end Angular controllers to handle user input and read from/write to database',
      'Employed test-driven workflow to limit debugging and ensure app functionality during development'
    ]
  },
  {
    name: 'React Fullstack Boilerplate',
    desc: 'A fullstack create-react-app',
    pic:'images/rfsb.png',
    links: [
      {name:'GitHub',url:'https://github.com/brettcnelson/react-fullstack-boilerplate'},
      {name:'Site',url:'https://fullstack-react-boilerplate.herokuapp.com/'}
    ],
    points: [
      'Built fullstack boilerplate with create-react-app, react-router, an expres proxy API server, working CRUD functionality with MongoDB/mongoose - preconfigured for easy Heroku deployment'
    ]
  },
  {
    name: 'Minimal Framework',
    desc: 'DESCRIPTION NEEDED',
    pic:'images/rfsb.png',
    links: [
      {name:'GitHub',url:'https://github.com/brettcnelson/MinimalFramework'}
    ],
    points: [
      'Built lightweight, minimal front-end framework script that diffs the DOM and manages component state'
    ]
  },
  {
    name: 'Dark Sky New Tab Chrome Extension',
    desc: 'A lightweight weather widget chrome extension',
    pic:'images/dsnt.jpg',
    links: [
      {name:'GitHub',url:'https://github.com/brettcnelson/dark-sky-new-tab'},
      {name:'Site',url:'https://dark-sky-new-tab.herokuapp.com/'},
      {name:'Chrome Extension',url:'https://chrome.google.com/webstore/detail/weather-widget-new-tab-pa/fecpjkhachlmnblhbmfldinkhfjeckkd'}

    ],
    points: [
      'Published new tab Chrome extension in Chrome Web Store (~475 users, 4.9 star rating)',
      'Combined Dark Sky weather data with Google Maps API to: get location-based weather, search any location for weather, get relevant Dark Sky and Google Maps links, and save your search locations'
    ]
  },
  {
    name: 'Tic-Tac-Toe Machine Learning',
    desc: 'A self-trained tic-tac-toe engine',
    pic:'images/rfsb.png',
    links: [
      {name:'GitHub',url:'https://github.com/brettcnelson/auto-tic'},
      {name:'Site',url:'https://auto-tic.herokuapp.com/'}
    ],
    points: [
      'Wrote machine learning algorithm for tic-tac-toe self-play',
      'Built React front-end where users can play against the computer as it continues to learn'
    ]
  },
  {
    name: 'Sort Algorithm Animator',
    desc: 'DESCRIPTION NEEDED',
    pic:'images/dsnt.jpg',
    links: [
      {name:'Site',url:'https://repl.it/@brettcnelson/sort-algos'}
    ],
    points:[
      'POINTS NEEDED'
    ]
  },
  {
    name: 'Sudoku Solver',
    desc: 'DESCRIPTION NEEDED',
    pic:'images/dsnt.jpg',
    links: [
      {name:'GitHub',url:'https://github.com/brettcnelson/sudoku-solver'},
      {name:'Site',url:'https://auto-sudoku.herokuapp.com/'}
    ],
    points: [
      'Wrote React front-end combined with algorithm to recursively solve any Sudoku puzzle'
    ]
  },
  {
    name: 'Mithril RSS Reader',
    desc: 'DESCRIPTION NEEDED',
    pic:'images/rfsb.png',
    links: [
      {name:'GitHub',url:'https://github.com/brettcnelson/mithril-test'},
      {name:'Site',url:'https://thawing-waters-90525.herokuapp.com/'}
    ],
    points:[
      'POINTS NEEDED'
    ]
  }
];

export { icons, techIcons, contactIcons, portfolio, skills };
