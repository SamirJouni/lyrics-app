import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

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
						{track.track_name} By{" "}
						<span className="text-secondary">{track.artist_name}</span>
					</h5>
					<div className="card-body">
						<p className="card-text">{lyrics.lyrics_body}</p>
					</div>
				</div>

				<ul className="list-group mt-3">
					<li className="list-group-item">
						<strong>Album ID</strong>: {track.album_id}
					</li>
				</ul>
			</React.Fragment>
		);
	}
}

export default Lyrics;
