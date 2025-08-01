import React from 'react';
import SimpleCursor from './SimpleCursor';

const CursorManager = () => {
  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return <SimpleCursor />;
};

export default CursorManager; 