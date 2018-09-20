import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "../context";
import Navbar from "../components/layout/Navbar";
import Index from "../components/layout/Index";
import Lyrics from "../components/tracks/Lyrics";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider>
				<Router basename={process.env.PUBLIC_URL + '/'}>
					<React.Fragment>
						<Navbar />
						<div className="container">
						<div className="shape-container">
							<div className="shape1"></div>
							<div className="shape2"></div>
						</div>
							<Switch>
								<Route exact path="/" component={Index} />
								<Route exact path="/lyrics/track/:id" component={Lyrics} />
							</Switch>
						</div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
