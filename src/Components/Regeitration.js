import React from 'react'
import './Page.css';
import './Registration.css';

function Registration() {

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className='page registration'>
            <div className="form-container">
                <div className="form-title">
                    <h3>Students details are required for the registration :</h3>
                    <p>All * fields are mandatory</p>
                </div>
                <form className="form" onSubmit={submitForm}>
                    <div className="input-box">
                        <input type="text" className="input-field" id='name' required />
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" id='branch' required />
                        <label htmlFor="branch">Your Branch</label>
                    </div>
                    <div className="input-box">
                        <input type="number" className="input-field" id='roll' required />
                        <label htmlFor="roll">Your Roll no.</label>
                    </div>
                    <div className="input-box">
                        <input type="number" className="input-field" id='year' required />
                        <label htmlFor="year">Your College Year</label>
                    </div>
                    <div className="input-box radio">
                        <label>Participation Field</label>
                        <div className="radio-box">
                            <input type="radio" name="Paricipated" id="quiz" required />
                            <label htmlFor="quiz">Quiz</label>
                        </div>
                        <div className="radio-box">
                            <input type="radio" name="Paricipated" id="project" required />
                            <label htmlFor="project">Project</label>
                        </div>
                    </div>
                    <div className="action-btns">
                        <input type="reset" value="Clear" />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration
