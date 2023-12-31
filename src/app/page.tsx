/* eslint-disable @next/next/no-img-element */
"use client";
import { Chart } from "@/components/domain/charts/Chart";
import { Card } from "@/components/shared/cards/Card";
import { useHome } from "@/hooks/home";

export default function Home() {
  const {
    weight,
    graphMode,
    userId,
    handleInput,
    handleAddData,
    changeGraphMode,
    changeUser,
    getUser,
  } = useHome();
  const user = getUser(userId);
  console.log("WEIGHT", weight);
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col justify-between gap-3 px-2 py-10 ">
        <div className="min-w-fit">
          <Card>
            <div className="flex flex-col gap-2 py-5">
              <button
                className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full border border-black/50 p-1 text-sm dark:border-white/50"
                onClick={changeUser}
              >
                <img
                  src={user.img}
                  className="h-6 w-6 rounded-full"
                  alt="ユーザーアイコン"
                />
                <p className="px-2">{user.name}</p>
              </button>
              <div className="flex min-w-fit items-baseline justify-center">
                <input
                  type="number"
                  className="dseg w-4/5 rounded bg-black/10 p-2 text-center text-7xl dark:bg-white/10"
                  max={100}
                  maxLength={3}
                  value={weight || ""}
                  inputMode="decimal"
                  onChange={(e) => {
                    handleInput(e.target.value);
                  }}
                />
                <p>kg</p>
              </div>
              <p className="text-center text-black/50 dark:text-white/50">
                今日もがんばりましょう！
              </p>

              <div className="w-full px-4 pt-2">
                <button
                  className="block w-full rounded bg-orange-500 py-2 font-bold text-white hover:bg-orange-700"
                  onClick={handleAddData}
                >
                  記録する！
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grow">
          <Chart {...{ graphMode, changeGraphMode }} />
        </div>
      </div>
    </div>
  );
}
