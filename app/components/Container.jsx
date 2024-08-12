import React from 'react';

export default function Container({ children }) {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  );
}
