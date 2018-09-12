import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
			</div>
		);
	}
}

export default App;
