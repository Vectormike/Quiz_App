import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quiz from './components/Questions/Quiz';
class App extends Component {
	constructor(){
		super()

		this.state = {
			questions: {}
		}
	}


getData = async () => {
	try {
		const results = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
		const all = await results.json()
		console.log(this.state.all)
		this.setState({questions:all})

	}
	catch(err) {
		console.log(`Oops!`, err)
	}
}

componentDidMount() {
	this.getData();
}


render() {
	return (
		<div className="App">
				<Route path="/" exact component={Home}/>
				<Route path="/quiz" render={() => {
					return (
						<Quiz data={this.state.questions}/>
					)
				}}
				/>
		</div>
	);
}



}

export default App;
