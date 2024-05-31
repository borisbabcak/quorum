import React from 'react';
import '../Index.css';
import SignUpButton from "../components/SignUpButton.tsx";
import HomeImg from "../assets/home.svg";
import CreateNewSurveyImg from "../assets/create_new_survey.svg";
import CreateFromTemplateImg from "../assets/create_from_template.svg";
import CreateNewSurveyButton from "../components/CreateNewSurveyButton.tsx";
import CreateFromTemplateButton from "../components/CreateFromTemplateButton.tsx";


const Home: React.FC = () => {
    return (
        <>
            <section className="home">
                <div>
                    <SignUpButton />
                </div>

                <div>
                    <div className="rectangle"></div>
                    <img src={HomeImg} className="home_image" alt="Home"/>
                    <h1>QUORUM</h1>
                    <p className="home_paragraph">
                        Where Every
                        <br/>
                        Opinion Counts
                    </p>
                </div>
            </section>

            <section className="create_survey">
                <div>
                    <img src={CreateNewSurveyImg} className="create_new_survey_image"
                         alt="Create New Survey"/>
                </div>
                <div className="create_new_survey_div">
                    <CreateNewSurveyButton/>
                    <p className="create_new_survey_paragraph">
                        Elevate your decision-making with
                        <br />
                        a New Survey to effortlessly
                        <br />
                        design and launch surveys.
                    </p>
                </div>
            </section>

            <section className="create_from_template">
                <div className="create_from_template_div">
                    <CreateFromTemplateButton/>
    <p className="create_from_template_paragraph">
                        Kickstart your project with our
                        pre-designed survey frameworks.
                    </p>
                </div>
                <div>
                    <img src={CreateFromTemplateImg} className="create_from_template_image" alt="Create from Template" />
                </div>
            </section>
        </>
    );
};

export default Home;
