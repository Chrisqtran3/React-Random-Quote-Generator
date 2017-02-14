import React from 'react';

class Controls extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick() {
		this.props.handleClick();
	}
	render() {
		return(
			<div>
				<div>
					<button onClick={this.handleClick.bind(this)} className="button new-quote">New Quote</button>
				</div>
			</div>
		);
	}
}

export default Controls;