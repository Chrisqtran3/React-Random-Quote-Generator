import React from 'react';
import Display from 'Display';
import APIData from 'APIData';
import Controls from 'Controls';
import TweetQuote from 'TweetQuote';

class Main extends React.Component {
	constructor(props) {
		super(props);

		let data = APIData.UpdateQuote();

		this.state = {
			quote: data.quote,
			author: data.author
		}
	}

	updateQuote() {

		let data = APIData.UpdateQuote();

		this.setState({
			quote: data.quote,
			author: data.author
		});

	}

	render() {

		return(
			<div>
				<div className="container">
					<h1>Random Quote Generator</h1>
					<p>This is a Random Quote Generator from Free Code Camp, rebuilt using React.js, a JavaScript library made by FaceBook.</p>
					<Display quote={this.state.quote} author={this.state.author}/>
					<Controls handleClick={this.updateQuote.bind(this)}/>
					<TweetQuote quote={this.state.quote}/>
				</div>
			</div>
		);
	}
}

export default Main;