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

const data = {
	contact: {
		name:'Brett Nelson',
		website:anchor('https://brettcnelson.site'),
		resume:anchor('https://drive.google.com/file/d/1io0leQeU2ls1Ss_rHLrWQeNs5vWa04rp/view'),
		GitHub:anchor('http://github.com/brettcnelson'),
		linkedIn:anchor('http://linkedin.com/in/brettcnelson'),
		email:anchor('mailto:brettcnelson@gmail.com'),
		twitter:anchor('https://twitter.com/_b_r_e_t_t'),
		'dev.to':anchor('https://dev.to/brettcnelson')
	},
	apps: apps.map(app)
};

document.getElementById('apps').innerHTML = `<pre><code>${JSON.stringify(data,null,5)}</code></pre>`;

function app({ name, url, code }) {
	return {
		name: `<span style=font-weight:bold>${name}</span>`,
		url: anchor(url,'green'),
		code: anchor(code,'red')
	};
}

function anchor(str,style='black',linkTxt) {
	return str && `<a href=${str} target=_blank style=color:${style}>${linkTxt||str}</a>`;
}








