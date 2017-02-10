const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router'); 

import Main from 'Main';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');



let quotes = [
	{
		quote: "Bippity boppity",
		author: "Chris Tran"
	}
]


ReactDOM.render(<Main quotes={quotes}/>, document.getElementById('app')
);