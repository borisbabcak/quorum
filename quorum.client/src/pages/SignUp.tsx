import React from 'react';
import '../Index.css';
import SignUpImg from '../assets/sign_up.svg';
import SignInButton from "../components/SignInButton.tsx";
import LogInButton from "../components/LogInButton.tsx";

const SignUp: React.FC = () => {
   
    return (
        <section className="sign_up">
            <div>
                <img src={SignUpImg} className="sign_up_image" alt="Sign Up"/>
            </div>
            <div className="sign_up_div">
                <SignInButton />
                <LogInButton />
            </div>
        </section>
    );
};

export default SignUp;
