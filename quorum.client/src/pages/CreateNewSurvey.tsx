import React, { useState } from 'react';
import '../pages-style/CreateNewSurveyStyle.css';
import '../components/SurveyTextField.tsx';
import '../components/SurveyChoiceField.tsx';
import {TextEditorProvider} from "../contexts/TextEditorContext.tsx";
import {ChoiceEditorProvider} from "../contexts/ChoiceEditorContext.tsx";
import TextEditor from "../components/TextEditor.tsx";
import ChoiceEditor from "../components/ChoiceEditor.tsx";
import SurveyTextField from '../components/SurveyTextField.tsx';
import SurveyChoiceField from '../components/SurveyChoiceField.tsx';

enum AnswerType {
    RANGE_10_BTTN = 'range_10_bttn',
    RANGE_STAR_BTTN = 'range_star_bttn',
    RANGE_SMILE_BTTN = 'range_smile_bttn',
    FREE_ANSWER_NO_BOX_BTTN = 'free_answer_no_box_bttn',
    FREE_ANSWER_BOX_BTTN = 'free_answer_box_bttn',
    CHECK_BOX_BTTN_SQ = 'check_box_bttn_sq',
    CHECK_BOX_BTTN_TR = 'check_box_bttn_tr',
    CHECK_BOX_BTTN_CR = 'check_box_bttn_cr',
}

enum FieldType {
    TEXT = 'text',
    CHOICE = 'choice',
}

interface BaseField{
    fieldType: FieldType;
}

interface QAField {
    question: string;
    answer: string;
    answerType: AnswerType; 
}

interface ChoiceField {
    choice: string;
}

interface TextField {
    text: string;
}

type Field = (QAField | ChoiceField | TextField) & BaseField

const CreateNewSurvey: React.FC = () => {
    const [fields, setFields] = useState<Field[]>([{ question: '', answer: '', answerType: AnswerType.RANGE_10_BTTN, fieldType: FieldType.CHOICE }]);
    const [editorSelect, setEditorSelect] = useState<string>('text');

    const addMoreFields = () => {
        if (editorSelect === 'text') {
            setFields([...fields, {text: '', fieldType: FieldType.TEXT}]);
        }
        if (editorSelect === 'choice') {
            setFields([...fields, {choice: '', fieldType: FieldType.CHOICE}]);
        }
    };

    const removeLastFields = () => {
        if (fields.length > 1) {
            const updatedFields = [...fields];
            updatedFields.pop();
            setFields(updatedFields);
        }
    };

    // const handleChange = (_index: number, _key: keyof Field, _value: any) => {
    //     const updatedFields = [...fields];
    //     //updatedFields[index][key] = value!;
    //     setFields(updatedFields);
    // };

    const handleEditorSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setEditorSelect(event.target.value);
    };

    return (
        <div className="create_survey">
            <div className="rectangle_questions">
                {fields.map((field, _index) => (
                    field.fieldType === 'text' ?
                        <SurveyTextField key={_index} />
                        :
                        field.fieldType === 'choice' ?
                            <SurveyChoiceField key={_index} />
                            :
                            <div className="input_pair">
                                <input type="text" placeholder="Enter your text here" className="survey_text_field"/>
                            </div>
                ))}
                <div className="buttons_pair">
                    <button className="field_button" onClick={addMoreFields}>+</button>
                    <button className="field_button" onClick={removeLastFields}>-</button>
                </div>
            </div>
            <div className="rectangle_editor">
                <select className="editor_select" onChange={handleEditorSelectChange} value={editorSelect}>
                    <option value="text">Text</option>
                    <option value="choice">Choice</option>
                    <option value="photo">Photo</option>
                </select>
                        {editorSelect === 'text' ?
                            <TextEditorProvider>
                                <TextEditor /> 
                            </TextEditorProvider>
                            :
                            <ChoiceEditorProvider>
                                <ChoiceEditor />
                            </ChoiceEditorProvider>}
            </div>
        </div>
    );
};

export default CreateNewSurvey;
