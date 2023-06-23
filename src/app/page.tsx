"use client";
import { Chart } from "@/components/domain/charts/Chart";
import { Card } from "@/components/shared/cards/Card";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col justify-between gap-3 px-2 py-10 ">
        <div className="min-w-fit">
          <Card>
            <div className="py-5">
              <div className="flex min-w-fit items-baseline justify-center">
                <input
                  type="number"
                  className="dseg w-4/5 rounded bg-black/10 p-2 text-center text-7xl dark:bg-white/10"
                  max={100}
                  maxLength={3}
                />
                <p>kg</p>
              </div>
              <p className="mt-2 text-center text-black/50 dark:text-white/50">
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

        <div className="grow md:h-full">
          <Chart />
        </div>
      </div>
    </div>
  );
}
