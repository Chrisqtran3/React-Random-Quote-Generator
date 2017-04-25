import React, { Component } from 'react';
import bind from 'autobind-decorator';

class Controls extends Component {
	
	@bind handleClick() {
		this.props.handleClick();
	}
	render() {
		return(
			<div>
				<div>
					<button onClick={this.handleClick} className="button new-quote">New Quote</button>
				</div>
			</div>
		);
	}
}

export default Controls;
