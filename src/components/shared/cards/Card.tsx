import React from "react";

export const Card: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <div className="w-full p-3 flex rounded-xl shadow bg-white dark:bg-black mx-auto justify-center items-center">
    {children}
  </div>
);
