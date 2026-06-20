import React from 'react';

const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  required = false,
  disabled = false,
  rows = 3,
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
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`w-full bg-[#0d0b0e] border ${
          error ? 'border-red-500/50' : 'border-[#1a161d]'
        } rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 
        focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 
        transition-all duration-200 resize-none ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      />
      {error && (
        <p className="text-xs text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default TextArea;