"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card } from "@/components/shared/cards/Card";
import { GraphMode, UserIds, Users } from "@/types/home";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "7日前",
  "6日前",
  "5日前",
  "4日前",
  "3日前",
  "一昨日",
  "昨日",
  "今日",
];

export const data = {
  labels,
  datasets: [
    {
      label: `体重(${Users[UserIds.SEG].name})`,
      data: [58.8, 58.4, 58.4, 58.6, 58.5, 58.4, 59, 58.3],
      borderColor: "rgb(52, 219, 235)",
      backgroundColor: "rgba(52, 219, 235, 0.5)",
      spanGaps: true,
    },
    {
      label: `体重(${Users[UserIds.KAZ].name})`,
      data: [54.4, 55.5, 54.8, 55.5, 55, null, 54.8],
      borderColor: "rgb(245, 118, 49)",
      backgroundColor: "rgba(245, 118, 49, 0.5)",
      spanGaps: true,
    },
  ],
};

export const Chart = ({
  graphMode,
  changeGraphMode,
}: {
  graphMode: GraphMode;
  changeGraphMode: (mode: GraphMode) => void;
}) => {
  return (
    <Card>
      <div className="flex h-full w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between">
          <p>体重変化</p>
          <div className="flex items-center text-xs">
            <button
              className={`rounded-l-md border border-black/50 px-3 py-1 dark:border-white/50 ${
                graphMode === GraphMode.MONTH && "bg-orange-500/50"
              }`}
              onClick={() => changeGraphMode(GraphMode.MONTH)}
            >
              月
            </button>
            <button
              className={`rounded-r-md border border-black/50 px-3 py-1 dark:border-white/50 ${
                graphMode === GraphMode.WEEK && "bg-orange-500/50"
              }`}
              onClick={() => changeGraphMode(GraphMode.WEEK)}
            >
              週
            </button>
          </div>
        </div>
        <div className="relative w-full grow">
          <Line options={options} data={data} />
        </div>
      </div>
    </Card>
  );
};
