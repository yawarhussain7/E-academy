import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const FormModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  onSubmit,
  submitLabel = 'Save',
  submitLoading = false,
  size = 'md',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full ${sizeClasses[size]} bg-[#120f14] border border-[#1a161d] rounded-2xl shadow-2xl shadow-purple-950/20 animate-in fade-in zoom-in duration-200`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-[#1a161d]">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">{title}</h2>
            {subtitle && (
              <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#0d0b0e] border border-[#1a161d] hover:border-[#2d2236] text-gray-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={onSubmit} className="p-6 space-y-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {children}
        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 pt-4 border-t border-[#1a161d]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 bg-[#0d0b0e] border border-[#1a161d] text-gray-400 hover:text-white font-bold text-xs uppercase tracking-wide rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitLoading}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wide rounded-xl transition-all duration-200 shadow-md shadow-purple-950/20"
          >
            {submitLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving...
              </span>
            ) : (
              submitLabel
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;