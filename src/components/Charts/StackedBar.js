import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const StackedBar = () => {
  const uData = [4000, 300, 2000, 2780, 1890, 239, 349];
  const pData = [2400, 1398, 980, 3908, 4800, 380, 430];
  const mData = [2400, 1398, 980, 3908, 4800, 380, 430];

  const xLabels = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
  ];
  const color = ["#488ecd", "#e68380", "#88eccf"];
  return (
    <BarChart
      colors={color}
      width={360}
      height={300}
      series={[
        { data: pData, label: "預算", id: "pvId", stack: "total" },
        { data: uData, label: "支出", id: "uvId", stack: "total" },
        { data: mData, label: "餘額", id: "mvId", stack: "total" },
      ]}
      legend={{ hidden: true }}
      margin={{
        top: 20,
      }}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
};
export default StackedBar;
