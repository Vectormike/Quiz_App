import React, { Component } from 'react';

class Quiz extends Component {
    constructor() {
        super();

        this.state = {
            results: {}
        }
    }

    componentWillMount() {
        fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(result => {
            console.log(JSON.stringify(result));
            this.setState({results: result})
            console.log(this.state.results)
        });
    }


    render() {
        return (
            
            <div id='container'>
                <div id='title'>
                    <header></header>
                </div>
                <hr/>
                <hr/>
                <div id='quiz'></div>
                <button className='button' id='next'>Next</button>
                <button className='button' id='prev'>Prev</button>
                <button className='button' id='start'>Start Over</button>
            </div>
            
        )
    }
}

export default Quiz;