import React, { Component } from 'react';

class Display extends Component {
	render() {

		let {quote, author} = this.props;

		return(
			<div>
				<h2><i>"{quote}"</i></h2>
				<h4>-{author}</h4>
			</div>
		);
	}
}

export default Display;
