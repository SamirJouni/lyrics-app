import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "../context";
import Navbar from "../components/layout/Navbar";
import Index from "../components/layout/Index";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<React.Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Index} />
							</Switch>
						</div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
