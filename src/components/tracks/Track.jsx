import React from "react";

const Track = props => {
	const { track } = props;
	console.log(track);
	return (
		<div className="col-md-6">
			<div className="card mb-4 shadow-sm">
				<div className="card-body">
					<h5>{track.artist_name}</h5>
					<p className="card-text">
						<strong><i className="fas fa-play"></i> Track</strong>: {track.track_name} <br />
						<strong><i className="fas fa-compact-disc"></i> Album</strong>: {track.album_name}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Track;
