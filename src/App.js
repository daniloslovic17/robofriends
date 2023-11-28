import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import './App.css';
// import { robots } from './robots'; // {} is used because export in this file isn't default, if there was for example another variable cats it would be {robots, cats}
// (not required anymore due to fetch part)

class App extends Component {
	constructor(){
		super(); // In order to use this, we have to call 'super'. States can change props and affect the app.
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	// This is part of React, that's why we don't use arrow function
	// Part of lifecycle methods
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json()).then( users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render(){
		const filteredRobots = this.state.robots.filter( robot => {
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			} )

		if (this.state.robots.length === 0){
			return <h1 className='tc'>Loading</h1>
		} else {
			return(
				<div className='tc' >
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange = { this.onSearchChange } />
					<CardList robots = { filteredRobots } />
				</div>
			);
		}
	}
}

export default App;