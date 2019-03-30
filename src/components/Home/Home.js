import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <Navbar/>
            <div className="center">
                <p className="br--top bg-white">Lorem ipsum color</p>
                <Link to="/quiz"><button className=" grow btn btn-primary btn-round btn-lg"><span className="btn-label"><i class="fas fa-play"></i></span> Play Quiz</button></Link>
            </div>
        </div>
    )
}

export default Home;