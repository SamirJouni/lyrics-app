import React, { Component } from 'react';
import {Consumer} from '../../context';

class Search extends Component {

	state = {
		trackTitle: ''
	 }

	render() {
		return (
			<Consumer>
				{
					value => {
						return (
							<div className="card card-body mb-4 p-4">
								<h1 className="display-4 text-center">
									<i className="fas fa-music mr-2"></i> What Song Are You Looking For ?
								</h1>
								<p className="lead text-center">Search For Your Song And View It's Lyrics</p>
							</div>
						);
					}
				}
			</Consumer>
		 );
	}
}

export default Search;