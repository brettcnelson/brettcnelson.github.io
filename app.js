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
		name: 'Mithril Test',
		url:'https://thawing-waters-90525.herokuapp.com/',
		code:'https://github.com/brettcnelson/mithril-test'
	},
	{
		name: 'Minimal Framework',
		url:null,
		code:'https://github.com/brettcnelson/MinimalFramework'
	},
	{
		name: 'Codepens',
		url:'https://codepen.io/brettcnelson',
		code:null
	}
];

const div = document.getElementById('apps');
const HTML = apps.map(({ name, url, code }) => {
	return {
		name: `<span style=font-weight:bold>${name}</span>`,
		url: url ? `<a href=${url} target="_blank">${url}</a>` : null,
		code: code ? `<a href=${code} target="_blank">${code}</a> ` : null
	};
});

div.innerHTML = `apps: <pre><code>${JSON.stringify(HTML,null,2)}</code></pre>`;









