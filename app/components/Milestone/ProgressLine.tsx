import React from 'react';
import { ProgressLineProps } from './types/type';

const ProgressLine: React.FC<ProgressLineProps> = ({ scrollProgress }) => {
  return (
    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1">
      {/* Gray background line */}
      <div className="absolute inset-0 bg-gray-300"></div>
      
      {/* Blue progress line - centered over the vertical line */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 transition-all duration-500 ease-in-out"
        style={{ width: '4px', height: `${scrollProgress}%` }}
      ></div>

      {/* Moving progress dot */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg transition-all duration-500 ease-in-out"
        style={{ top: `${scrollProgress}%`, transform: 'translate(-50%, -50%)' }}
      ></div>
    </div>
  );
};

export default ProgressLine
