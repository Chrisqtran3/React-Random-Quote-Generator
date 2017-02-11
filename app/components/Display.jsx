import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props);
	}
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