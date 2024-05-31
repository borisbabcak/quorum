import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../components-style/PrintBttn.css';
import SendButtonToServer from '../communication/SendButtonToServer';
import printImg from "../assets/printer.svg"; // Import SendButtonToServer

const PrintButton: React.FC = () => {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const sendToPrint = async () => { // Make the function async
        await SendButtonToServer('signIn', 'api/signin'); // Send a request to the server
        navigate('/signin'); // Navigate to the sign-up page
    };
    
    return (
        <div className="button-container" onClick={sendToPrint}>
            <button className="print_button"><img src={printImg} className="print_image" alt="printer image"/></button>
        </div>
    );
};

export default PrintButton;
