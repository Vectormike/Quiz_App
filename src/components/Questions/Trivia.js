import React from 'react'


const Trivia = ({nextButton, resp}) => {
    return (
        <div>
            {JSON.stringify({resp})}
            <p><button onClick={nextButton}>Next</button></p>
        </div>
    )
}

export default Trivia;