'use client';

import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileSelectAction: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelectAction,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelectAction(file);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={'m-4 rounded-[10px] border-2 border-dashed border-primary/50'}
    >
      <div
        className="relative h-32 cursor-pointer rounded-lg bg-primary/5 transition-colors duration-100 hover:bg-primary/10"
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
          <p className="text-sm">
            {fileName ? fileName : 'Click to upload or drag and drop'}
          </p>
          {!fileName && (
            <p className="mt-1 text-xs">
              SVG, PNG, JPG or GIF (max. 800x400px){' '}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
