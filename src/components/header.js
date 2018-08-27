import React from 'react';
import './header.css';

export default function Header(props){
	return(
		<div id="headerDiv">
		{props.result}
		</div>
	);
}