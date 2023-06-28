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
    title: {
      display: true,
      text: "体重変化",
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
      label: "体重(せぐ)",
      data: [58.8, 58.4, 58.4, 58.6, 58.5, 58.4, 59, 58.3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      spanGaps: true,
    },
    {
      label: "体重(くしちゃん)",
      data: [54.4, 55.5, 54.8, 55.5, 55, null, 54.8],
      borderColor: "rgb(51, 176, 120)",
      backgroundColor: "rgba(51, 176, 120, 0.5)",
      spanGaps: true,
    },
  ],
};

export const Chart = () => {
  return (
    <Card>
      <div className="relative h-full w-full">
        <Line options={options} data={data} />
      </div>
    </Card>
  );
};
