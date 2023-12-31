import React from 'react';
import Card from './Card';


const CardList = ( {robots} ) => {
	return(
		<div>
			{
				robots.map( ( user, i )  => {
					return ( 
						<Card 
						key={ robots[i].id } 
						id={ robots[i].id } 
						name = { robots[i].name } 
						email={ robots[i].email } /> 
					);
					// when doing a loop components must have key prop
				})
			}
		</div>
	);
}

export default CardList;
