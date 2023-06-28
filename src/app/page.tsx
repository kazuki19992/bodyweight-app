/* eslint-disable @next/next/no-img-element */
"use client";
import { Chart } from "@/components/domain/charts/Chart";
import { Card } from "@/components/shared/cards/Card";
import { useHome } from "@/hooks/home";
import toast from "react-hot-toast";

export default function Home() {
  const { weight, handleInput } = useHome();
  console.log("WEIGHT", weight);
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col justify-between gap-3 px-2 py-10 ">
        <div className="min-w-fit">
          <Card>
            <div className="flex flex-col gap-2 py-5">
              <button className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full p-1 text-sm outline outline-black/50 dark:outline-white/50">
                <img
                  src="/userIcon/kazuki19992.JPG"
                  className="h-6 w-6 rounded-full"
                  alt="ユーザーアイコン"
                />
                <p className="px-2">くしちゃん</p>
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
                  onClick={() => {
                    toast.success("ちゃんと記録したよ！");
                  }}
                >
                  記録する！
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grow">
          <Chart />
        </div>
      </div>
    </div>
  );
}
