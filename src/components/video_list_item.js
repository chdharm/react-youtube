import React from 'react';


const VideoListItem = (props) => {
	const video = props.video
	const onVideoSelect = props.onVideoSelect
	return(
		<li onClick = {() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className = "media-left">
			  		<img className="media-object" src={video.snippet.thumbnails.default.url} alt="Generic placeholder image" />
				</div>
				<div className="media-body">
			    	<div className="media-heading">{video.snippet.title}</div>
			  	</div>
			</div>

		</li>

		);
}

export default VideoListItem;
