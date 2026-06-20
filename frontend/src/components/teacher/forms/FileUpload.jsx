import React, { useState, useRef } from 'react';
import { Upload, File, X, Image, Video, FileText, Link as LinkIcon } from 'lucide-react';

const FileUpload = ({
  label,
  name,
  value,
  onChange,
  accept = 'image/*,video/*,.pdf,.doc,.docx,.ppt,.pptx',
  maxSize = 50, // MB
  error = '',
  required = false,
  type = 'file', // 'file', 'url', or 'both'
  placeholder = 'https://example.com/lecture.mp4',
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleFileSelect = (file) => {
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }
    onChange({ target: { name, value: file, type: 'file' } });
    
    // Generate preview for images/videos
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    } else if (file.type.startsWith('video/')) {
      setPreview('video');
    } else {
      setPreview('document');
    }
  };

  const handleRemove = () => {
    onChange({ target: { name, value: '', type: 'file' } });
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const getFileIcon = () => {
    if (preview === 'video') return <Video className="w-8 h-8 text-purple-400" />;
    if (preview === 'document') return <FileText className="w-8 h-8 text-purple-400" />;
    if (preview) return <Image className="w-8 h-8 text-purple-400" />;
    return <Upload className="w-8 h-8 text-gray-500" />;
  };

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      {/* URL Input */}
      {(type === 'url' || type === 'both') && (
        <div className="relative mb-3">
          <LinkIcon className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="url"
            name={name}
            value={typeof value === 'string' ? value : ''}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-[#0d0b0e] border border-[#1a161d] rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"
          />
        </div>
      )}

      {/* File Upload Area */}
      {(type === 'file' || type === 'both') && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${
            dragOver
              ? 'border-purple-500 bg-purple-500/5'
              : preview
                ? 'border-[#3b1d4a] bg-[#1c1221]'
                : 'border-[#1a161d] bg-[#0d0b0e] hover:border-[#2d2236]'
          } ${error ? 'border-red-500/50' : ''}`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={(e) => {
              if (e.target.files[0]) handleFileSelect(e.target.files[0]);
            }}
            className="hidden"
          />

          {preview ? (
            <div className="space-y-3">
              {preview === 'video' ? (
                <div className="flex justify-center">{getFileIcon()}</div>
              ) : preview === 'document' ? (
                <div className="flex justify-center">{getFileIcon()}</div>
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-32 mx-auto rounded-lg object-cover"
                />
              )}
              <p className="text-xs text-gray-400">
                {typeof value === 'object' ? value.name : 'File selected'}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                className="text-xs text-red-400 hover:text-red-300 transition-colors"
              >
                Remove file
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-center">
                <Upload className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  <span className="text-purple-400 font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Images, Videos, PDF, DOC up to {maxSize}MB
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <p className="text-xs text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};

export default FileUpload;