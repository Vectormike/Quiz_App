import React, { Component } from 'react';

class Fetch extends Component {
    constructor() {
        super();

        this.state = {
            data: {}
            }
        }
    

getData = async () => {
    try {
        const results = await fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        const all = await results.json()
        this.setState({data:all})
    }
    catch(err) {
        console.log(`Oops!`, err)
    }
    console.log(this.state.data)
}

    
render() {
        
	const questions = this.state.data.response.map(item => {
		return item.question
	})
	console.log(questions)

	return (
		null
		);
	}
}

export default Fetch;