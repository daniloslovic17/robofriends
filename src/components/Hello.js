import React from 'react';
import './Hello.css';

class Hello extends React.Component{
	render(){
		return(
		<div className="f1 tc">
			<h1>Hello World</h1>
			<p>{this.props.greeting}</p>
		</div>
		);
	}
}

// same as

// const Hello = (props) => {
// 	return(
// 		<div className="f1 tc">
// 		<h1>Hello World</h1>
// 		<p>{props.greeting}</p>
// 		</div>
// 	);
// }

export default Hello; 