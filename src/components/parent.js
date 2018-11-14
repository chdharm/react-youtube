
import React from 'react'
import Child from './child';

class Parent extends React.Component{
	constructor(props){
		super(props);


		this.state = {term : ''};


	}


	render(){
		return (
			<Child bops= "test" />
			);
	}

}


export default Parent;