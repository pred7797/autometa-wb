import { useState } from 'react';

const DropdownSelect = ({ options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedValue(selectedOption);
        onChange(selectedOption);
    };

    return (
        <select value={selectedValue} onChange={handleChange}>
            <option value="">Select</option>
            {options.map((option) => (
                <option key={option.value} value={option.label}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default DropdownSelect;
