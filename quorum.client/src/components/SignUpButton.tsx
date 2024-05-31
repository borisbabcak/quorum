import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components-style/SignUpBttn.css';
import SendButtonToServer from '../communication/SendButtonToServer'; // Import SendButtonToServer

const SignUpButton: React.FC = () => {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const handleSignUp = async () => { // Make the function async
        await SendButtonToServer('signUp', '/api/signup'); // Send a request to the server
        navigate('/signup'); // Navigate to the sign-up page
    };

    return (
        <div className="button-container" onClick={handleSignUp}>
            <button className="sign_up_bttn">SIGN UP</button>
        </div>
    );
};

export default SignUpButton;