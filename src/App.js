import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import { robots } from './robots'; // {} is used because export in this file isn't default, if there was for example another variable cats it would be {robots, cats}


class App extends Component {
	constructor(){
		super(); // In order to use this, we have to call 'super'. States can change props and affect the app.
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		console.log(event.target.value);
	}

	render(){
		return(
			<div className='tc' >
				<h1>Robofriends</h1>
				<SearchBox searchChange = { this.onSearchChange } />
				<CardList robots = { this.state.robots } />
			</div>
		);
	}
}

export default App;