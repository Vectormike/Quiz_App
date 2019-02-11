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
            console.log(this.state.data)
        });
    }


    render() {

        const category = this.state.data.res.map((res) => {
            return res.category
        })

        return (
            
            <div id='container'>
                <div id='title'>
                    <header>{category}</header>
                </div>
                <hr/>
                <hr/>
                <div id='quiz'>{}</div>
                <button className='button' id='next'>Next</button>
                <button className='button' id='prev'>Prev</button>
                <button className='button' id='start'>Start Over</button>
            </div>
            
        )
    }
}

export default Quiz;