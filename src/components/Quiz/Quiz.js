import React, { Component } from 'react';

class Quiz extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                response: []
            }
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
            const all = await response.json()
            this.setState({
                data: {
                    response: all.results
                }})
            console.log(this.state.data.response[0])
        } 
        catch(err) {
            console.log(`Oops!`, err)
        }
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
        
        const questions = this.state.data.response.map(item => {
            return [item.question]
        })
        console.log(questions)

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