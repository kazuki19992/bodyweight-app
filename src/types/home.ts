// グラフの月/週切り替え
export const GraphMode = {
  MONTH: "MONTH",
  WEEK: "WEEK",
} as const;
export type GraphMode = keyof typeof GraphMode;

// ユーザーID
export const UserIds = {
  SEG: "SEG",
  KAZ: "KAZ",
} as const;
export type UserIds = keyof typeof UserIds;

// ユーザー型
export type User = {
  name: string;
  img: string;
  id: UserIds;
};
export const Users: Users = {
  SEG: {
    id: UserIds.SEG,
    name: "せぐちゃん",
    img: "/userIcon/seg.jpg",
  },
  KAZ: {
    id: UserIds.KAZ,
    name: "くしちゃん",
    img: "/userIcon/kazuki19992.JPG",
  },
} as const;
// TODO: この辺UserIdsを使ってきれいに書き直したい
export type Users = { SEG: User; KAZ: User };
