import React, { Component } from 'react';

class Quiz extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentWillMount() {
        fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(result => {
            this.setState({
                data: {
                    response: result.results
                }
            })
        });
    }

    //The #Previous button event clicking
    onPrevClick = (event) => {
        console.log(event.target.value)
    }

    //The #Next button event clicking
    onNextClick = (event) => {
        console.log(event.target.value)
    }


    //The #Startover button event clicking
    onStartClick = (event) => {
        console.log(event.target.value)
    }
    render() {


        return (
            
            <div id='container'>
                <div id='title'>
                    <header></header>
                </div>
                <hr/>
                <hr/>
                <div id='quiz'>{}</div>
                <button className='button' id='prev' onClick={this.onPrevClick}>Prev</button>
                <button className='button' id='next' onClick={this.onNextClick}>Next</button>
                <button className='button' id='start' onClick={this.onStartClick}>Start Over</button>
            </div>
            
        )
    }
}

export default Quiz;