import React, { Component } from "react";
import { Consumer } from "../../context";

class Search extends Component {
	state = {
		trackTitle: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	findTrack = e => {
		e.preventDefault();
		fetch(
			`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
				this.state.trackTitle
			}&page_size=10&page=1&s_track_rating=desc&apikey=${
				process.env.REACT_APP_MM_KEY
			}`
		)
			.then(response => response.json())
			.then(data => )
			.catch(error => console.log(error));
	};
	render() {
		return (
			<Consumer>
				{value => {
					return (
						<div className="card card-body mb-4 p-4">
							<h1 className="display-4 text-center">
								<i className="fas fa-music mr-2" /> Find Those Lyrics
							</h1>
							<p className="lead text-center">
								Search For Your Song And View It's Lyrics
							</p>
							<form onSubmit={this.findTrack}>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Type In The Song Title..."
										name="trackTitle"
										value={this.state.trackTitle}
										onChange={this.onChange}
									/>
								</div>
							</form>
							<button
								className="btn btn-primary btn-lg btn-block mb-5"
								type="submit"
							>
								<i class="fas fa-search mr-2" />
								Search
							</button>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;
