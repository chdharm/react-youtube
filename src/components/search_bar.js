import React from 'react'
import Parent from './parent';

class SearchBar extends React.Component{
	constructor(props){
		super(props);


		this.state = {term : ''};


	}



	render(){
		return(
			<div className="search-bar">
			<input value = {this.state.term} onChange = {event => this.onInputChange(event.target.value)} />
			Value of Input : {this.state.term}
			{console.log(event)}
			<Parent/>

			</div>
		);
	}


	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);


	}

}


export default SearchBar;