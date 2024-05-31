import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SendButtonToServer from '../communication/SendButtonToServer';

function TemplateSelector() {
    const navigate = useNavigate();
    const [, setSelectedTemplate] = useState<number | null>(null);

    const handleSelectTemplate = async (templateId: number) => {
        setSelectedTemplate(templateId);
        const endpoint = `/api/templates/${templateId}`;
        await SendButtonToServer(`Template ${templateId}`, endpoint);        
        navigate('/api/Templates/${templateId}');
    };

    return (
        <div>
            <h1>Select a Template</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
                <div onClick={() => handleSelectTemplate(1)} style={{ cursor: 'pointer' }}>
                    <img src="/path-to-icon1.png" alt="Template 1" />
                    <p>Template 1</p>
                </div>
                <div onClick={() => handleSelectTemplate(2)} style={{ cursor: 'pointer' }}>
                    <img src="/path-to-icon2.png" alt="Template 2" />
                    <p>Template 2</p>
                </div>
            </div>
        </div>
    );
}

export default TemplateSelector;