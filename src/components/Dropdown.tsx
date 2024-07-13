import React from 'react';
import { DropdownOption } from '../types/alphaVantage';

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = React.memo(({ value, onChange, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-2 mb-4 border rounded"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
));

export default Dropdown;
