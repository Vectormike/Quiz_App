import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            questions: {}
        }
    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(result => {
            console.log(JSON.stringify(result));
            let questions =result.map((quest) => {
                return quest.result.question
            })
        this.setState({questions: questions})
        console.log('State', this.state.questions)
        });
    }


  render() {
    return (
      <div className="tc">
        <Navbar/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
