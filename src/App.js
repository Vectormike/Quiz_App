import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Trivia from './components/Questions/Trivia';
class App extends Component {
	constructor(){
		super()

		this.state = {
			results: []
		}
	}


getData = async () => {
	try {
		const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
		const data = await response.json()
		this.setState({results: data.results})
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
	
	const questions = this.state.results.map(data => data.question)
	console.log(questions);
	const answers = this.state.results.map(data => data.correct_answer)	
	console.log(answers);

	return (
		<div className="App">
				<Route path="/" exact component={Home}/>
				<Route path="/quiz" render={() => (
					<Trivia
						questions={questions}
						answers={answers}
						nextButton={this.onNextClick}
					/>
				)}
				/>
		</div>
	);
}



}

export default App;
