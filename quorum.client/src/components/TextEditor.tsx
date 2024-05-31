import React from "react";
import {useTextEditor} from "../contexts/TextEditorContext.tsx";
import printImg from "../assets/printer.svg";
import sendImg from "../assets/sent-mail.svg";


const TextEditor: React.FC = () => {
    const {
        font, fontSize, isBold, isItalic, isUnderline, alignment, color,
        setFont, setFontSize, setIsBold, setIsItalic, setIsUnderline, setAlignment, setColor
    } = useTextEditor();

    const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFont(event.target.value);
    };

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFontSize(parseInt(event.target.value));
    };

    const toggleBold = () => {
        setIsBold(!isBold);
    };

    const toggleItalic = () => {
        setIsItalic(!isItalic);
    };

    const toggleUnderline = () => {
        setIsUnderline(!isUnderline);
    };

    const handleAlignmentChange = (newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div className="editors">
            <div className="font_picker">
                <p className="text">FONT</p>
                <select className="font_picker_select" value={font} onChange={handleFontChange}>
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>
            </div>

            <div className="font_size">
                <p className="text">SIZE</p>
                <select className="font_size_select" value={fontSize} onChange={handleFontSizeChange}>
                    {[...Array(20).keys()].map((size) => (
                        <option key={size} value={size + 10}>{size + 10}</option>
                    ))}
                </select>
            </div>

            <div className="font_style">
                <p className="text">STYLE</p>
                <button className={`style_bold${isBold ? ' active' : ''}`} onClick={toggleBold}>B</button>
                <button className={`style_italic${isItalic ? ' active' : ''}`} onClick={toggleItalic}>I</button>
                <button className={`style_underline${isUnderline ? ' active' : ''}`} onClick={toggleUnderline}>U
                </button>
            </div>

            <div className="font_align">
                <p className="text">ALIGN</p>
                <button className={`align_left${alignment === 'left' ? ' active' : ''}`}
                        onClick={() => handleAlignmentChange('left')}>L
                </button>
                <button className={`align_center${alignment === 'center' ? ' active' : ''}`}
                        onClick={() => handleAlignmentChange('center')}>C
                </button>
                <button className={`align_right${alignment === 'right' ? ' active' : ''}`}
                        onClick={() => handleAlignmentChange('right')}>R
                </button>
            </div>

            <div className="color_picker">
                <p className="text">COLOR</p>
                <input className="color_picker_input" type="color" value={color} onChange={handleColorChange}/>
            </div>
            <div className="print_button_pair">
                <button className="print_button"><img src={printImg} className="print_image" alt="printer image"/></button>
                <button className="send_button"><img src={sendImg} className="send_image" alt="sent-mail image"/>
                </button>
            </div>
        </div>
    );
};

export default TextEditor;