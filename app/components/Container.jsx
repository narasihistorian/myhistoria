import React from 'react';

export default function Container({ children }) {
  return (
    <div className="relative flex flex-col mx-auto w-screen min-h-screen desktopMinWidth:w-[90vw] fullHdMinWidth:w-[80vw]">
      {children}
    </div>
  );
}
