import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_TRACKS':
		return {
			...state,
			track_list: action.payload,
			heading: 'Search Results'
		};
		default:
		return state;
	}
};

export class Provider extends Component {

	state = {
		track_list: [],
		heading: 'Top 10 Tracks',
		dispatch: (action) => this.setState(state => reducer(state, action)),
		loading: false,
		toggle_loading: () => this.setState({loading: !this.state.loading}),
		no_results: false,
		toggle_no_results: () => this.setState({no_results: !this.state.no_results}),
	}

	componentDidMount () {
		fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=de&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
		.then(response => response.json())
		.then(data => this.setState({track_list: data.message.body.track_list}))
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