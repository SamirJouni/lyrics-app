import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {

	state = {
		track_list: [
			{track: {track_name: 'abc'}},
			{track: {track_name: '123'}},
		],
		heading: 'Top 10 Tracks'
	}

	componentDidMount () {
		fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=de&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error));
	}

  render() {
    return (
      <Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;