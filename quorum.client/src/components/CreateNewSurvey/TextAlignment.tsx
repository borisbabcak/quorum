import { useState } from 'react';

const TextAlignButton = () => {
    // List of text alignments
    const alignments: React.CSSProperties['textAlign'][] = ['left', 'center', 'right'];

    // State variable for the selected alignment
    const [selectedAlignment, setSelectedAlignment] = useState(alignments[0]);

    // Function to handle alignment selection
    const handleAlignmentChange = (alignment: React.CSSProperties['textAlign']) => {
        setSelectedAlignment(alignment);
    };

    return (
        <div>
            {alignments.map((alignment) => (
                <button key={alignment} onClick={() => handleAlignmentChange(alignment)}>
                    {alignment}
                </button>
            ))}
            <p style={{ textAlign: selectedAlignment }}>
                The quick brown fox jumps over the lazy dog.
            </p>
        </div>
    );
};

export default TextAlignButton;