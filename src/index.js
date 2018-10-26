import React from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';


const KEY = 'AIzaSyBczBVjenorwTEyI_4al2hxdDqeE0A2B1M';




class App extends React.Component{
	constructor(props){
		super(props);

	this.state = {videos: [], selectedVideo: null}

	this.videoSearch('Ultra Instinct First')


	}


	videoSearch(term) {
		YTSearch({key: KEY, term: term}, (data) => {
			this.setState({ videos: data,selectedVideo: data[0]})
		} );
	}



	render(){

		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch} />

				<VideoDetail video = {this.state.selectedVideo}/>

				<VideoList videos = {this.state.videos} onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }  />
			</div>

			);
	}
}



ReactDom.render(<App />,document.querySelector('.container'));