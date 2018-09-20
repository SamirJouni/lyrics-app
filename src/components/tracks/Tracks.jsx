import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

class Tracks extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { track_list, heading, loading, no_results } = value;

					if (
						track_list === undefined ||
						track_list.length === 0 ||
						loading === true
					) {
						if (track_list.length === 0 && no_results === true) {
							return (
								<div className="h5 text-center">
									<i className="far fa-file mr-2" />
									No Results
								</div>
							);
						}
						return <Spinner />;
					}
					return (
						<React.Fragment>
							<h3 className="text-center mb-4">{heading}</h3>
							<div
								style={{
									height: "100%",
									width: "100%",
									overflow: "hidden"
								}}
							>
								<div className="scroll-parent">
									<div className="row scroll-child">
										{track_list.map(item => (
											<Track track={item.track} key={item.track.track_id} />
										))}
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Tracks;
