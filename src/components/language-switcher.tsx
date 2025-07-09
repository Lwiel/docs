import React, { ChangeEvent } from 'react';
import { useLanguage } from './language-context';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    return (
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="language-select">Select language: </label>
            <select
                id="language-select"
                value={language}
                onChange={handleChange}
            >
                <option value="csharp">C#</option>
                <option value="nodejs">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="php">PHP</option>
            </select>
        </div>
    );
}