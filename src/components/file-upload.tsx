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
      className="border-secondary-border relative m-4 h-32 cursor-pointer rounded-lg border-2 border-dashed bg-secondary transition-colors duration-300 hover:border-primary/30 hover:bg-secondary"
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
