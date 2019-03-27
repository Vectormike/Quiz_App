import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
	constructor(){
		super()

	this.state = {
		data: {}
		}
	}


getData = async () => {
	try {
		const results = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
		const all = await results.json()
		this.setState({data:all})
	}catch(err) {
		console.log(`Oops!`, err)
	}
	console.log(this.state.data)
	}

//    const questions = this.state.data.response.map(item => {return item.question	})

  render() {
	 return (
		<div className="tc">
		  <Route path="/" render={() => {
			 return (
				<div>
				  <Navbar/>
				</div>
			 );
		  }}>
		  </Route>
		  
		</div>
	 );
  }
}

export default App;
