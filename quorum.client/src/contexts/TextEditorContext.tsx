import React, {createContext, ReactNode, useContext, useState} from 'react';

interface TextEditorContextProps {
    font: string;
    fontSize: number;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    alignment: string;
    color: string;
    setFont: (font: string) => void;
    setFontSize: (fontSize: number) => void;
    setIsBold: (isBold: boolean) => void;
    setIsItalic: (isItalic: boolean) => void;
    setIsUnderline: (isUnderline: boolean) => void;
    setAlignment: (alignment: string) => void;
    setColor: (color: string) => void;
}

const TextEditorContext = createContext<TextEditorContextProps | undefined>(undefined);

interface TextEditorProviderProps {
    children: ReactNode;
}
export const TextEditorProvider: React.FC<TextEditorProviderProps> = ({ children }) => {
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState<number>(20);
    const [isBold, setIsBold] = useState<boolean>(false);
    const [isItalic, setIsItalic] = useState<boolean>(false);
    const [isUnderline, setIsUnderline] = useState<boolean>(false);
    const [alignment, setAlignment] = useState<string>('left');
    const [color, setColor] = useState<string>('#000000');

    return (
        <TextEditorContext.Provider value={{
            font,
            fontSize,
            isBold,
            isItalic,
            isUnderline,
            alignment,
            color,
            setFont,
            setFontSize,
            setIsBold,
            setIsItalic,
            setIsUnderline,
            setAlignment,
            setColor
        }}>
            {children}
        </TextEditorContext.Provider>
    );
};

export const useTextEditor = (): TextEditorContextProps => {
    const context = useContext(TextEditorContext);
    if (!context) {
        throw new Error('useTextEditor must be used within a TextEditorProvider');
    }
    return context;
};
