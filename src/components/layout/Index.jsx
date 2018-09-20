import React from "react";
import Search from "../tracks/Search"
import Tracks from "../tracks/Tracks";

const Index = () => {
	return (
		<React.Fragment>
			<Search />
			<div className="shape3"></div>
			<Tracks />
		</React.Fragment>
	);
};

export default Index;
