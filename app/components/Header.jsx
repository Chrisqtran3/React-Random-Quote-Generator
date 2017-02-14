import React from 'react';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<h1>Random Quote Generator</h1>
				<p>This is a Random Quote Generator from Free Code Camp, rebuilt using React.js, a JavaScript library made by FaceBook.</p>
			</div>
		);
	}
}

export default Header;