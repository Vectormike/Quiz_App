import React from 'react'


const Trivia = ({nextButton, resp}) => {
    return (
        <div>
            <p>{resp}</p>
            <p><button onClick={nextButton}>Next</button></p>
        </div>
    )
}

export default Trivia;