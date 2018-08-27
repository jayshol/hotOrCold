import React from 'react';
import './about-button.css';

export default function AboutButton(props){
	return (
		<button type="button" className="about-btn" onClick={props.onClick}>What &#63;</button>
	);
}