import React from 'react';

const Quiz = () => {
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

export default Quiz;