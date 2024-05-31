import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components-style/SignInBttn.css';
import SendButtonToServer from '../communication/SendButtonToServer'; // Import SendButtonToServer

const SignUpButton: React.FC = () => {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const handleSignUp = async () => { // Make the function async
        await SendButtonToServer('signIn', 'api/signin'); // Send a request to the server
        navigate('/signin'); // Navigate to the sign-up page
    };
    
    return (
        <div className="button-container" onClick={handleSignUp}>
            <button className="sign_in_bttn">SIGN IN</button>
        </div>
    );
};

export default SignUpButton;