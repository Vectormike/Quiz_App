import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Quiz from './components/Quiz/Quiz'
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="tc">
        <Navbar/>
        <Quiz/>
        <Footer/>
      </div>
    );
  }
}

export default App;
