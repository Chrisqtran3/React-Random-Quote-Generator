import React from 'react';
import Display from 'Display';
import APIData from 'APIData';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		let data = APIData.UpdateQuote();
		let quote = data.quote;
		let author = data.author;

		return(
			<div>
				<div className="container">
					<h1>Random Quote Generator</h1>
					<p>This is a Random Quote Generator from Free Code Camp, rebuilt using React.js, a JavaScript library made by FaceBook.</p>
					<Display quote={quote} author={author}/>
				</div>
			</div>
		);
	}
}

export default Main;