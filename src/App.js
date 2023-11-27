import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import { robots } from './robots'; // {} is used because export in this file isn't default, if there was for example another variable cats it would be {robots, cats}


const App = () => {
	return(
		<div className='tc' >
			<h1>Robofriends</h1>
			<SearchBox />
			<CardList robots = { robots } />
		</div>
	);
}

export default App;