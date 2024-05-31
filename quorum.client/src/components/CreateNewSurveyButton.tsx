import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components-style/CreateNewSurveyBttn.css';
import SendButtonToServer from '../communication/SendButtonToServer'; // Import SendButtonToServer

const CreateNewSurveyButton: React.FC = () => {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const handleCreateSurvey = async () => { // Make the function async
        await SendButtonToServer('CreateNewSurvey', '/api/createnewsurvey'); // Send a request to the server
        navigate('/CreateNewSurvey'); // Navigate to the CreateNewSurvey page
    };

    return (
        <div className="button-container" onClick={handleCreateSurvey}>
            <button className="create_new_survey_bttn">CREATE NEW SURVEY</button>
        </div>
    );
};

export default CreateNewSurveyButton;