const apps = [
	{
		name: 'brettcnelson.site',
		url:'https://brettcnelson.site',
		code:'https://github.com/brettcnelson/about'
	},
	{
		name: 'Fullstack React Boilerplate',
		url:'https://fullstack-react-boilerplate.herokuapp.com/',
		code:'https://github.com/brettcnelson/react-fullstack-boilerplate'
	},
	{
		name: 'Trivial Conquest',
		url:'https://intense-journey-25938.herokuapp.com',
		code:'https://github.com/trivial-conquest/trivial-conquest'
	},
	{
		name: 'Dark Sky Weather New Tab Page',
		url:'https://chrome.google.com/webstore/detail/weather-widget-new-tab-pa/fecpjkhachlmnblhbmfldinkhfjeckkd',
		code:'https://github.com/brettcnelson/dark-sky-new-tab'
	},
	{
		name: 'Machine Learning Tic-Tac-Toe',
		url:'https://auto-tic.herokuapp.com/',
		code:'https://github.com/brettcnelson/auto-tic'
	},
	{
		name: 'Sudoku Solver',
		url:'https://auto-sudoku.herokuapp.com/',
		code:'https://github.com/brettcnelson/sudoku-solver'
	},
	{
		name: 'Sort Algorithm Animator',
		url:'https://sort.brettcnelson.site',
		code:'https://repl.it/@brettcnelson/sort-algos'
	},
	{
		name: 'Mithril Test',
		url:'https://thawing-waters-90525.herokuapp.com/',
		code:'https://github.com/brettcnelson/mithril-test'
	},
	{
		name: 'Minimal Framework',
		code:'https://github.com/brettcnelson/MinimalFramework'
	},
	{
		name: 'Codepens',
		url:'https://codepen.io/brettcnelson',
	}
];

const colors = {
	black: '#000000',
	red: '#C51E14',
	green: '#1DC121',
	yellow: '#C7C329',
	blue: '#0A2FC4',
	magenta: '#C839C5',
	cyan: '#20C5C6',
	white: '#C7C7C7',
	lightBlack: '#686868',
	lightRed: '#FD6F6B',
	lightGreen: '#67F86F',
	lightYellow: '#FFFA72',
	lightBlue: '#6A76FB',
	lightMagenta: '#FD7CFC',
	lightCyan: '#68FDFE',
	lightWhite: '#FFFFFF',
};

const data = {
	contact: {
		name:`<span style=color:#f18000 >Brett Nelson</span>`,
		website:anchor('https://brettcnelson.site'),
		resume:anchor('https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view'),
		GitHub:anchor('http://github.com/brettcnelson'),
		linkedIn:anchor('http://linkedin.com/in/brettcnelson'),
		email:anchor('mailto:brettcnelson@gmail.com'),
		twitter:anchor('https://twitter.com/_b_r_e_t_t'),
		youtube:anchor('https://www.youtube.com/channel/UC2K4JNW9KtgzQ1bZkdN7X3g'),
		'dev.to':anchor('https://dev.to/brettcnelson')
	},
	apps: apps.map(app)
	// ,colors: Object.entries(colors).map(([key,val]) => anchor(key,val))
};
 

document.getElementById('apps').innerHTML = `<pre><code>${JSON.stringify(data,null,5)}</code></pre>`;

function app({ name, url, code }) {
	return {
		name: `<strong>${name}</strong>`,
		url: anchor(url,colors.lightCyan),
		code: anchor(code,colors.lightRed)
	};
}

function anchor(str,style=colors.lightYellow,linkTxt) {
	return str && `<a href=${str} target=_blank style=color:${style}>${linkTxt||str}</a>`;
}
