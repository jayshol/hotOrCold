import React from 'react';
import AboutButton from './about-button';
import NewGameButton from './new-game-button';
import AboutBlock from './about-block';
import Game from './new-game';
import './hot-and-cold.css';

export default class HotAndCold extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'button-pressed' : ''
		};
		this.handleAboutClick = this.handleAboutClick.bind(this);
		this.handleNewClick = this.handleNewClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleAboutClick(e){
		//alert("About me");
		this.setState({
			'button-pressed' : "about"
		});
	}

	handleNewClick(e){
		// alert("New");
		this.setState({
			'button-pressed' : "newGame"
		});
	}

	handleClose(e){
		this.setState({
			'button-pressed': ''
		});
	}

	render(){
		//console.log(this.state['button-pressed']);
		let description = "";
		if(this.state['button-pressed'] === "about"){
			description = <AboutBlock onClick={this.handleClose}/>;
		} else if(this.state['button-pressed'] === "newGame") {
			description = <Game type="new" />;
		}else{
			description = <h1 className="gameName">Hot Or Cold</h1>;
		}
		return (
			<div className="hot-and-cold">
				<AboutButton onClick={this.handleAboutClick}/>
				<NewGameButton onClick={this.handleNewClick}/>
				{description}				
			</div>
		)
	}
}