import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <Navbar/>
            <div className="center">
                <p>Lorem ipsum color</p>
                <button className="btn btn-dark btn-lg"><Link to="#"><span className="btn-label"><i className="glyphicon glyphicon-ok"></i></span> Play Quiz</Link></button>
            </div>
        </div>
    )
}

export default Home;