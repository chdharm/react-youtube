import React from 'react';
import VideoListItem from './video_list_item';
import VideoDetail from './video_detail';

const VideoList = (props) => {

	const item = props.videos.map((video) => {
		return(
			<div>
			<VideoListItem video = {video} key = {video.etag} />
					<br />
			</div>
		);
	});


	return (
		<ul className= "col-md-4 list-group">
			{item}
		</ul>
	);
}


export default VideoList;




