import React, { useState } from 'react';
import '../pages-style/SignInStyle.css';
import SignUpImg from '../assets/sign_up.svg';
import axios from 'axios';

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('/signup', {
                firstName,
                lastName,
                email,
                password,
            });
            console.log(response.data);
            alert('Sign up successful');
            window.location.href = '/login';
        } catch (error) {
            console.error('There was an error signing up!', error);
            alert('There was an error signing up!');
        }
    };

    return (
        <section className="sign_in">
            <div>
                <img src={SignUpImg} className="sign_up_image" alt="Sign Up"/>
            </div>
            <div className="sign_in_div">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="first_name_input"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="last_name_input"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="email_input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="password_input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="sign_in_formular_button">SIGN UP</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;