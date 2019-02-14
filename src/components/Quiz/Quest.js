import React from 'react'


const Quest = ({questions, onPrevClick, onNextClick, onStartClick}) => {
    return (
        <div id='container'>
                <div id='title'>
                    <header></header>
                </div>
                <hr/>
                <hr/>
                <div id='quiz'>{questions}</div>
                <button className='button' id='prev' onClick={onPrevClick}>Prev</button>
                <button className='button' id='next' onClick={onNextClick}>Next</button>
                <button className='button' id='start' onClick={onStartClick}>Start Over</button>
            </div>
            
   
    );
}

export default Quest;