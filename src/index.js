import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';


const KEY = 'AIzaSyBczBVjenorwTEyI_4al2hxdDqeE0A2B1M';




class App extends React.Component{
	constructor(props){
		super(props);

	this.state = {videos: []}

	YTSearch({key: KEY, term: 'Bane'}, (data) => {
		//console.log(data);
		this.setState({ videos: data})
	} );


	}





	render(){
		return (
			<div>
				<VideoDetail video = {this.state.videos[0]}/>
				<SearchBar />

				<VideoList videos = {this.state.videos} />
			</div>

			);
	}
}



ReactDom.render(<App />,document.querySelector('.container'));