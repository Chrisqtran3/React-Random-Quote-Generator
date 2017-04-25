import React from 'react';
import Display from 'Display';
import APIData from 'APIData';
import Controls from 'Controls';
import TweetQuote from 'TweetQuote';
import Header from 'Header';
import bind from 'autobind-decorator';

class Main extends React.Component {
	constructor(props) {
		super(props);

		let data = APIData.UpdateQuote();

		this.state = {
			quote: data.quote,
			author: data.author
		}
	}

	@bind updateQuote() {

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
					<Header/>
					<Display quote={this.state.quote} author={this.state.author}/>
					<Controls handleClick={this.updateQuote}/>
					<TweetQuote quote={this.state.quote}/>
				</div>
			</div>
		);
	}
}

export default Main;
