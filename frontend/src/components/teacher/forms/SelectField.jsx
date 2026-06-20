import React from 'react';

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = '',
  required = false,
  disabled = false,
  icon: Icon,
}) => {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="block text-xs font-bold uppercase tracking-wider text-gray-400"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 z-10">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`w-full bg-[#0d0b0e] border ${
            error ? 'border-red-500/50' : 'border-[#1a161d]'
          } rounded-xl px-4 py-2.5 text-sm text-gray-200 
          focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 
          transition-all duration-200 appearance-none cursor-pointer ${
            Icon ? 'pl-10' : ''
          } ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <option value="" disabled className="bg-[#0d0b0e] text-gray-600">
            {placeholder}
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value} className="bg-[#0d0b0e] text-gray-200">
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default SelectField;