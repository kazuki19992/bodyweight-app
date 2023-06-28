import React, { useState } from "react";
import toast from "react-hot-toast";

export const useHome = (initialState?: number) => {
  const [weight, setWeight] = useState<number | null>(initialState || null);

  const handleInput = (weight: string) => {
    try {
      setWeight(Number(weight));
    } catch {
      setWeight((prev) => prev);
    }
  };

  const handleAddData = () => {
    if (Number.isNaN(weight) || weight == null || weight === 0) {
      toast.error("変な値が入ってきた！！！");
      return;
    }
    toast.success("ちゃんと記録したよ！");
  };

  return { weight, setWeight, handleInput, handleAddData };
};
