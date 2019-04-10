import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quiz from './components/Questions/Quiz'
import Trivia from './components/Questions/Trivia';
class App extends Component {
	constructor(){
		super()

		this.state = {
			results: {}
		}
	}


getData = async () => {
	try {
		const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
		const data = await response.json()
		this.setState({results: data})
		console.log(this.state.results)
	}
	catch(err) {
		console.log(`Oops!`, err)
	}
}

componentDidMount() {
	this.getData();
}

onNextClick = () => {
	this.getData()
}

render() {
	return (
		<div className="App">
				<Quiz resp={this.state.results}/>
				<Route path="/" exact component={Home}/>
				<Route path="/quiz" render={() => (
					<Trivia
					
				resp={this.state.results}
						nextButton={this.onNextClick}
					/>
				)}
				/>
		</div>
	);
}



}

export default App;
