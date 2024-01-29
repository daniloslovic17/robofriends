import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"
import './App.css';
// import { robots } from './robots'; // {} is used because export in this file isn't default, if there was for example another variable cats it would be {robots, cats}
// (not required anymore due to fetch part)

const App = () => {
	const[robots, setRobots] = useState([]);
	const[searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json()).then( users => {setRobots(users)})
	}, []);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	}
	const filteredRobots = robots.filter( robot => {
			if(robot.name.toLowerCase().includes(searchfield.toLowerCase())){
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			} else if(robot.email.toLowerCase().includes(searchfield.toLowerCase())){
				return robot.email.toLowerCase().includes(searchfield.toLowerCase());
			} else {
				return null;
			}
		} )

	if ( !robots.length ){
		return <h1 className='tc'>Loading</h1>
	} else {
		return(
			<div className='tc' >
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange = { onSearchChange } />
				<Scroll>
					<ErrorBoundry>
						<CardList robots = { filteredRobots } />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
