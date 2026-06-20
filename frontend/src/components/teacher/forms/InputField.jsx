import React from 'react';

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
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
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full bg-[#0d0b0e] border ${
            error ? 'border-red-500/50' : 'border-[#1a161d]'
          } rounded-xl px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 
          focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 
          transition-all duration-200 ${
            Icon ? 'pl-10' : ''
          } ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        />
      </div>
      {error && (
        <p className="text-xs text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default InputField;