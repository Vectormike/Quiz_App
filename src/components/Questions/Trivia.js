import React from 'react';
import './Trivia.css';


const Trivia = ({nextButton, questions, answers}) => {

	if(questions) {
		
	}

	return (
		<div className="section container bg-info">
		   <div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h3><span className="label label-warning">No.</span>Questions</h3>
				</div>
				<div className="modal-body">
					<div className="quiz" data-toggle="buttons">
						<label className=""><span><i class="fas fa-angle-right"></i></span><input type="radio"/>Answer</label>
					</div>
				</div>
				<button>Next</button>
			</div>
		   </div>
		</div>
	)
}

export default Trivia;