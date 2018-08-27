import React from 'react';
import './status.css';

export default function Status(props){
	
	return(
		<div id="statusDiv">
			{props.previousGuesses}
		</div>
	);
}