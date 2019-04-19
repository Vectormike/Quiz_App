import React from 'react';
import './Trivia.css';


const Trivia = ({nextButton, questions, answers}) => {
	return (
		<div className="section container bg-info">
		   <div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h3><span className="label label-warning">No.</span>Questions</h3>
				</div>
				<div className="modal-body">
					<div className="quiz" data-toggle="buttons">
						<label className=""><span><i class="fas fa-angle-right"></i></span><input type="radio"/></label>
					</div>
				</div>
			</div>
		   </div>
		</div>
	)
}

export default Trivia;