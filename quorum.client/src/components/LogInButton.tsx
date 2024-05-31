import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components-style/LogInBttn.css';
import SendButtonToServer from '../communication/SendButtonToServer'; // Import SendButtonToServer

const SignUpButton: React.FC = () => {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const handleSignUp = async () => { // Make the function async
        await SendButtonToServer('logIn', '/api/login'); // Send a request to the server
        navigate('/login'); // Navigate to the sign-up page
    };

    return (
        <div className="button-container" onClick={handleSignUp}>
            <button className="log_in_bttn">LOG IN</button>
        </div>
    );
};

export default SignUpButton;