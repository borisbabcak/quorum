import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components-style/CreateFromTemplateBttn.css';
import SendButtonToServer from '../communication/SendButtonToServer';

const CreateFromTemplateButton: React.FC = () => {
    const navigate = useNavigate();

    const handleCreateFromTemplate = async () => {
        await SendButtonToServer('createNewSurvey', 'api/CreateNewSurvey');
        navigate('/createnewsurvey');
    };

    return (
        <div className="button-container" onClick={handleCreateFromTemplate}>
            <button className="create_from_template_bttn">CREATE FROM TEMPLATE</button>
        </div>
    );
};

export default CreateFromTemplateButton;
