import React, { Component } from 'react';

class Lyrics extends Component {

	state= {
		track: {},
		lyrics: {}
	}

	componentDidMount () {
		fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error));
	}

	render() {
		return (
			<h1>Lyrics</h1>
		 );
	}
}

export default Lyrics;