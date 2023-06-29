import { GraphMode, User, UserIds, Users } from "@/types/home";
import { useState } from "react";
import toast from "react-hot-toast";

export const useHome = (initialState?: number) => {
  const [weight, setWeight] = useState<number | null>(initialState || null);
  const [graphMode, setGraphMode] = useState<GraphMode>("WEEK");
  const [userId, setUserId] = useState<UserIds>(UserIds.SEG);

  /**
   * 体重を入力
   * @param weight 入力値(体重)
   */
  const handleInput = (weight: string): void => {
    try {
      setWeight(Number(weight));
    } catch {
      setWeight((prev) => prev);
    }
  };

  /**
   * データの記録実行用関数
   */
  const handleAddData = (): void => {
    if (Number.isNaN(weight) || weight == null || weight === 0) {
      toast.error("変な値が入ってきた！！！");
      return;
    }
    toast.success("ちゃんと記録したよ！");
  };

  /**
   * グラフの表示モードを切り替える
   * @param mode グラフの表示モード
   */
  const changeGraphMode = (mode: GraphMode) => {
    setGraphMode(mode);
  };

  /**
   * ユーザー切り替え
   */
  const changeUser = () => {
    setUserId((prev) => (prev === UserIds.SEG ? UserIds.KAZ : UserIds.SEG));
  };

  /**
   * ユーザーIDからユーザーデータを取得
   * @param userId ユーザーのID
   * @returns ユーザーデータ
   */
  const getUser = (userId: UserIds): User => {
    return Users[userId];
  };

  return {
    weight,
    graphMode,
    userId,
    handleInput,
    handleAddData,
    changeGraphMode,
    changeUser,
    getUser,
  };
};
