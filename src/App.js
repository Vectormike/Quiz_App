import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
    constructor() {
        super()

        this.state = {
            question: {}
        }
    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(results => {
            console.log(JSON.stringify(results));
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
