import React from 'react';

class TweetQuote extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let {quote} = this.props;

		let targetString = "https://twitter.com/intent/tweet?text="

		if(quote.length > 100) {
    	quote = quote.substr(0,100).match(/(^.+)(\s)/)[0] + "...";
  	}

  	quote = encodeURI("\"" + quote);

		return(
			<div>
				<a href={targetString + quote} target="_blank" aria-hidden="true"><i className="fa fa-twitter" aria-hidden="true"></i> Tweet</a>
			</div>
		);
	}
}

export default TweetQuote;