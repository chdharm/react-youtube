import React from 'react';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';

const VideoList = (props) => {

	const item = props.videos.map((video) => {
		return(
			<VideoListItem video = {video} key = {video.etag} onVideoSelect = {props.onVideoSelect} />
		);
	});


	return (
		<ul className= "col-md-4 list-group" >
			{item}
		</ul>
	);
}


export default VideoList;




