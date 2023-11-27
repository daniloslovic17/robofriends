import React from "react";
import CardList from "./CardList";
import { robots } from './robots'; // {} is used because export in this file isn't default, if there was for example another variable cats it would be {robots, cats}


const App = () => {
	return(
		<CardList robots = { robots } />
	);
}

export default App;