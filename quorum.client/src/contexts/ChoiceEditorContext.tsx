import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChoiceEditorContextProps {
    lastAnswerType: string | null;
    setLastAnswerType: (type: string | null) => void;
}

interface ChoiceEditorProviderProps {
    children: ReactNode;
}

const ChoiceEditorContext = createContext<ChoiceEditorContextProps | undefined>(undefined);

export const ChoiceEditorProvider: React.FC<ChoiceEditorProviderProps> = ({ children }) => {
    const [lastAnswerType, setLastAnswerType] = useState<string | null>(null);

    return (
        <ChoiceEditorContext.Provider value={{
            lastAnswerType,
            setLastAnswerType,
        }}>
            {children}
        </ChoiceEditorContext.Provider>
    );
};

export const useChoiceEditor = (): ChoiceEditorContextProps => {
    const context = useContext(ChoiceEditorContext);
    if (!context) {
        throw new Error('useChoiceEditor must be used within a ChoiceEditorProvider');
    }
    return context;
};
