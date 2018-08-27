import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component{
	constructor(props){
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(e){
		e.preventDefault();
		const input = document.getElementById("guess-number");
		this.props.handleGuess(input.value);
		input.value = '';
		input.focus();
	}

	render(){
		return(
			<div id="formDiv">
				<form id="guessForm">
					<label>Enter a number
						<input type="number" id="guess-number" name="guess-number" />
					</label>
					<button type="submit" onClick={this.handleOnClick}>Guess</button>
				</form>
			</div>
		);
	}	
}