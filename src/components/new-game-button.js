import React from 'react';
import './new-game-button.css';

export default function NewGameButton(props){
	return (
		<button type="button" className="new-game-btn" onClick={props.onClick} >&#43; New Game</button>
	);
}