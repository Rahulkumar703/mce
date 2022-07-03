import axios from 'axios';
import React, { useState } from 'react'
import './Page.css';
import './Registration.css';

function Registration() {

    const [inputData, setInputData] = useState({ name: '', branch: '', roll: '', year: '', participation: '' });
    const [info, setInfo] = useState('All fields are mendatory');

    const submitForm = async (e) => {
        e.preventDefault();
        setInfo('');

        const response = await axios.post('/api/mce/insert/registration', inputData);
        setInfo(response.data.message);

        setInputData({ name: '', branch: '', roll: '', year: '', participation: '' });
    }
    const handleInput = (e) => {
        setInputData((prev) => { return { ...prev, [e.target.name]: e.target.value } });
    }




    return (
        <div className='page registration'>
            <div className="form-container">
                <div className="form-title">
                    <h3>Students details are required for the registration :</h3>
                    <p>{info}</p>
                </div>
                <form className="form" onSubmit={submitForm}>
                    <div className="input-box">
                        <input type="text" className="input-field" name="name" id='name' value={inputData.name} onChange={handleInput} required />
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="input-box">
                        <input type="text" className="input-field" name="branch" id='branch' value={inputData.branch} onChange={handleInput} required />
                        <label htmlFor="branch">Your Branch</label>
                    </div>
                    <div className="input-box">
                        <input type="number" className="input-field" name="roll" id='roll' value={inputData.roll} onChange={handleInput} required />
                        <label htmlFor="roll">Your Roll no.</label>
                    </div>
                    <div className="input-box">
                        <input type="number" className="input-field" name="year" id='year' value={inputData.year} onChange={handleInput} required />
                        <label htmlFor="year">Your College Year</label>
                    </div>
                    <div className="input-box radio">
                        <label>Participation Field</label>
                        <div className="radio-box">
                            <input type="radio" name="participation" id="quiz" value='Quiz' onChange={handleInput} required />
                            <label htmlFor="quiz">Quiz</label>
                        </div>
                        <div className="radio-box">
                            <input type="radio" name="participation" id="project" value='Project' onChange={handleInput} required />
                            <label htmlFor="project">Project</label>
                        </div>
                        <div className="radio-box">
                            <input type="radio" name="participation" id="standup" value='Standup' onChange={handleInput} required />
                            <label htmlFor="standup">Stand Up</label>
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
