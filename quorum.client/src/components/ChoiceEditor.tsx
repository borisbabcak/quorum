import React from "react";
import {useChoiceEditor} from "../contexts/ChoiceEditorContext.tsx";

const ChoiceEditor:React.FC = () => {
    const { lastAnswerType, setLastAnswerType } = useChoiceEditor();

    const handleButtonClick = (type: string) => {
        setLastAnswerType(type);
    };

    return (
        <div className="editors">
            <div className="type">
                <p className="type_text">Type</p>
                <div className="range">
                    <p className="range_text">Range</p>
                    <button className="range_10_bttn" onClick={() => handleButtonClick('range_10_bttn')}>0-10</button>
                    <button className="range_star_bttn" onClick={() => handleButtonClick('range_star_bttn')}>⭐️</button>
                    <button className="range_smile_bttn" onClick={() => handleButtonClick('range_smile_bttn')}>😀</button>
                </div>

                <div className="free_answer">
                    <p className="free_answer_text">Free answer</p>
                    <button className="free_answer_no_box_bttn" onClick={() => handleButtonClick('free_answer_no_box_bttn')}>✔️</button>
                    <button className="free_answer_box_bttn" onClick={() => handleButtonClick('free_answer_box_bttn')}>☑️</button>
                </div>

                <div className="check_box">
                    <p className="check_box_text">Check box</p>
                    <button className="check_box_bttn_sq" onClick={() => handleButtonClick('check_box_bttn_sq')}>⏹️</button>
                    <button className="check_box_bttn_tr" onClick={() => handleButtonClick('check_box_bttn_tr')}>🔼</button>
                    <button className="check_box_bttn_cr" onClick={() => handleButtonClick('check_box_bttn_cr')}>⏺️</button>
                </div>
            </div>

            {lastAnswerType === 'range_10_bttn' && (
                <div className="range_10_line">
                    {Array.from(Array(11).keys()).map((number) => (
                        <label key={number}>
                            <input type="checkbox" value={number} />
                            {number}
                        </label>
                    ))}
                </div>
            )}

            {lastAnswerType === 'range_star_bttn' && (
                <div className="range_star">
                    {[...Array(5).keys()].map((index) => (
                        <label key={index}>
                            <input type="checkbox" value={index + 1} />
                            ⭐️
                        </label>
                    ))}
                </div>
            )}

            {lastAnswerType === 'range_smile_bttn' && (
                <div className="range_smile">
                    {['😀', '🙂', '😐', '🙁', '☹️'].map((emoji, index) => (
                        <label key={index}>
                            <input type="checkbox" value={emoji} />
                            {emoji}
                        </label>
                    ))}
                </div>
            )}

            {lastAnswerType === 'free_answer_box_bttn' && (
                <div className="free_answer_box" style={{ border: '0.3rem solid #caf0fe' }}>
                    {/* Border applied */}
                </div>
            )}

            {lastAnswerType === 'check_box_bttn_sq' && (
                <div className="check_box_square">
                    <input type="checkbox" />
                    <input type="text" />
                </div>
            )}

            {lastAnswerType === 'check_box_bttn_tr' && (
                <div className="check_box_triangle">
                    <input type="checkbox" />
                    <input type="text" />
                </div>
            )}

            {lastAnswerType === 'check_box_bttn_cr' && (
                <div className="check_box_circle">
                    <input type="checkbox" />
                    <input type="text" />
                </div>
            )}
        </div>
    );
};

export default ChoiceEditor;