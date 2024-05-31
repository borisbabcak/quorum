import React, { useState } from 'react';
import '../pages-style/LogInStyle.css';
import SignUpImg from '../assets/sign_up.svg';
import axios from 'axios';

const LogIn: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('/login', {
                username,
                password,
            });
            console.log(response.data);
            alert('Login successful');
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('There was an error logging in!');
        }
    };

    return (
        <section className="log_in">
            <div>
                <img src={SignUpImg} className="sign_up_image" alt="Sign Up"/>
            </div>
            <div className="log_in_div">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="email_input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="password_input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="log_in_formular_button">LOG IN</button>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
