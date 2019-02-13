import React, { Component } from 'react';
import Quest from '../Quiz/Quest'

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
            return item.question
        })
        console.log(questions)

        return (
          <Quest onPrevClick={this.onPrevClick} onStartClick={this.onStartClick} onNextClick={this.onNextClick} />  
        );
    }
}

export default Quiz;