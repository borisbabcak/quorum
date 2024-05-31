import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components-style/SentMailBttn.css.css';
import SendButtonToServer from '../communication/SendButtonToServer';
import sendImg from "../assets/sent-mail.svg"; // Import SendButtonToServer

const SendButton: React.FC = () => {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const sentMail = async () => { // Make the function async
        await SendButtonToServer('signIn', 'api/signin'); // Send a request to the server
        navigate('/signin'); // Navigate to the sign-up page
    };

    return (
        <div className="button-container" onClick={sentMail}>
            <button className="send_button"><img src={sendImg} className="send_image" alt="sent-mail image"/></button>
        </div>
);
};

export default SendButton;