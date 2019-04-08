import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quiz from './components/Questions/Quiz';
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
		console.log(data)
		this.setState({results: {
			question: data.results[0].question,
			answer: data.results[0].correct_answer
		}})
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
				<Route path="/" exact component={Home}/>
				<Route path="/quiz" render={() => {
					<Trivia
						res={this.state.results} 
						nextButton={this.onNextClick}
					/>
				}}
				/>
		</div>
	);
}



}

export default App;
