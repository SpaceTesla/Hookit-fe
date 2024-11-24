'use client';

import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="relative h-32 w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors duration-300 hover:bg-gray-100"
      onClick={handleDivClick}
    >
      <input
        type="file"
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Upload className="mb-3 h-8 w-8 text-gray-400" />
        <p className="text-sm text-gray-600">
          {fileName ? fileName : 'Click to upload or drag and drop'}
        </p>
        {!fileName && (
          <p className="mt-1 text-xs text-gray-500">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        )}
      </div>
    </div>
  );
};
