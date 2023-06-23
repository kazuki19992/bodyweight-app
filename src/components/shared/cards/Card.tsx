import React from "react";

export const Card: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <div className="mx-auto flex h-full w-full items-center justify-center rounded-xl bg-white p-3 shadow dark:bg-black">
    {children}
  </div>
);
