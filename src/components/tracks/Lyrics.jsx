import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class Lyrics extends Component {
	state = {
		track: {},
		lyrics: {}
	};

	componentDidMount() {
		fetch(
			`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
				this.props.match.params.id
			}&apikey=${process.env.REACT_APP_MM_KEY}`
		)
			.then(response => response.json())
			.then(data => {
				this.setState({ lyrics: data.message.body.lyrics });

				return fetch(
					`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
						this.props.match.params.id
					}&apikey=${process.env.REACT_APP_MM_KEY}`
				);
			})
			.then(response => response.json())
			.then(data => this.setState({ track: data.message.body.track }))
			.catch(error => console.log(error));
	}

	render() {
		const { track, lyrics } = this.state;

		if (
			track === undefined ||
			lyrics === undefined ||
			Object.keys(track).length === 0 ||
			Object.keys(lyrics).length === 0
		) {
			return <Spinner />;
		}
		return (
			<React.Fragment>
				<Link to="/" className="btn btn-dark btn-sm mb-4">
					<i className="fas fa-chevron-left mr-1" /> Back
				</Link>
				<div className="card">
					<h5 className="card-header">
						{track.track_name} By {" "}
						<span className="text-secondary">{track.artist_name}</span>
					</h5>
					<div className="card-body">
						<p className="card-text">{lyrics.lyrics_body}</p>
					</div>
				</div>

				<ul className="list-group mt-3">
				<li className="list-group-item">
						<strong>Album</strong>:
						<span className="ml-2">{
							track.album_name
						}</span>
					</li>
					<li className="list-group-item">
						<strong>Genre</strong>:
						<span className="ml-2">{
							track.primary_genres.music_genre_list[0].music_genre
								.music_genre_name
						}</span>
					</li>
					<li className="list-group-item">
						<strong>Explicit</strong>:
						<span className="ml-2">{
							track.explicit === 0 ? 'No' : 'Yes'
						}</span>
					</li>
					<li className="list-group-item">
						<strong>Release</strong>:
						<span className="ml-2">
							<Moment format="DD-MM-YYYY">{track.first_release_date}</Moment>
						</span>
					</li>
				</ul>
			</React.Fragment>
		);
	}
}

export default Lyrics;