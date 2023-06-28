import React, { useState } from "react";

export const useHome = (initialState?: number) => {
  const [weight, setWeight] = useState<number | null>(initialState || null);

  const handleInput = (weight: string) => {
    try {
      setWeight(Number(weight));
    } catch {
      setWeight((prev) => prev);
    }
  };

  return { weight, setWeight, handleInput };
};
