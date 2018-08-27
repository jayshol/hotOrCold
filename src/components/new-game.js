import React from 'react';
import Header from './header';
import GuessForm from './guess-form';
import Status from './status';
import './game.css';

export default class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			answer : Math.floor(Math.random() * 100) + 1,			
			previousGuesses : [],
			result: 'Make a guess'
		}
		this.handleGuess = this.handleGuess.bind(this);		
	}

	componentWillReceiveProps(props){
		if(props.type === "new"){
			this.setState({
				answer : Math.floor(Math.random() * 100) + 1,			
				previousGuesses : [],
				result: 'Make a guess'
			});
		}
	}

	handleGuess(guess){

		let result;
		const diff = Math.abs(guess - this.state.answer);		

	    if (diff >= 50) {
	      result = 'You\'re Ice Cold...';
	    } else if (diff >= 30) {
	      result = 'You\'re Cold...';
	    } else if (diff >= 10) {
	      result = 'You\'re Warm.';
	    } else if (diff >= 1) {
	      result = 'You\'re Hot!';
	    } else {
	      result = 'You got it!';
	    }

		this.setState({			
			previousGuesses : [...this.state.previousGuesses, guess],
			result
		});
	}

	render(){
		const {previousGuesses, result} = this.state;
		const guessList = previousGuesses.map((guess, index) =>{			
			return <span className="guessSpan" key={index}>{guess}</span>
		});
		console.log(guessList);

		return(
			<section>
				<h1>Hot Or Cold</h1>
				<div id="gameDiv">
					<Header result={result} />
					<GuessForm handleGuess={this.handleGuess}/>
					<Status previousGuesses={guessList} />
				</div>				
			</section>
		);
	}	
}