import React from "react";

export default function Container({ children }) {
  return (
    <div className="relative px-[5%] flex flex-col mx-auto w-screen min-h-screen desktopMinWidth:w-[95vw] fullHdMinWidth:w-[90vw]">
      {children}
    </div>
  );
}
