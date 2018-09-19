import React, { Component } from "react";
import { Consumer } from "../../context";

class Search extends Component {
	state = {
		trackTitle: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	findTrack = (dispatch, toggle_loading, toggle_no_results , e) => {
		e.preventDefault();
		toggle_loading();
		this.setState({ trackTitle: "" });
		fetch(
			`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
				this.state.trackTitle
			}&page_size=10&page=1&s_track_rating=desc&apikey=${
				process.env.REACT_APP_MM_KEY
			}`
		)
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: "SEARCH_TRACKS",
					payload: data.message.body.track_list
				});
				toggle_loading();
				if (!data.message.body.track_list.length) {
					toggle_no_results();
				}
			})
			.catch(error => console.log(error));
	};
	render() {
		return (
			<Consumer>
				{value => {
					const { dispatch, toggle_loading, toggle_no_results } = value;
					return (
						<div className="card card-body mb-4 p-4">
							<h1 className="display-4 text-center">
								<i className="fas fa-music mr-2" /> Find Those Lyrics
							</h1>
							<p className="lead text-center">
								Search For Your Song And View It's Lyrics
							</p>
							<form onSubmit={this.findTrack.bind(this, dispatch, toggle_loading, toggle_no_results)}>
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
								<button
								className="btn btn-primary btn-lg btn-block mb-5"
								type="submit"
							>
								<i className="fas fa-search mr-2" />
								Search
							</button>
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;
