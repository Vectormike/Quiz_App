import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="tc">
        <Route path="/" render={() => {
          return (
            <div>
              <Navbar/>
      
              <Footer/>
            </div>
          );
        }}>
        </Route>
        
      </div>
    );
  }
}

export default App;
