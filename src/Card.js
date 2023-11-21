import React from 'react';

// const Card = (props) => {
	// return(
	// 	<div className='tc bg-light-green dib br3 pa3 ma2 gro bw-2 shadow-5'>
	// 		<img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
	// 		<div>
	// 			<h2>{props.name}</h2>
	// 			<p>{props.email}</p>
	// 		</div>
	// 	</div>
	// );

	// same as

// 	const { name, email, id } = props;
// 	return(
// 		<div className='tc bg-light-green dib br3 pa3 ma2 gro bw-2 shadow-5'>
// 			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		</div>
// 	);
// }

// same as

const Card = ({ name, email, id }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 gro bw-2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;