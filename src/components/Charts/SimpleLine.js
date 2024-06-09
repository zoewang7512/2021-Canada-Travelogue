import React, { useContext } from "react";
import dayjs from "dayjs";
import { DarkModeContext } from "../../context/ThemeContext";
//mui
import { LineChart } from "@mui/x-charts/LineChart";


const SimpleLine = ({ data }) => {

  const { mode} = useContext(DarkModeContext);
  //function to change the date format
  function DateString1(value) {
    const time = value && value.toDate().toLocaleDateString();
    const timedate = dayjs(time).format("YYYY/MM/DD");
    return timedate;
  }
  //將轉變好的date放入array內
  const result = data.map((obj) => ({
    ...obj,
    date: DateString1(obj.date), 
  }));
  // calculate the value each day
  const resultByDate = result.reduce((r, { amount, date }) => {
    var temp = r.find((o) => o.date === date);
    if (temp) {
      temp.amount += amount;
    } else {
      r.push({ date, amount });
    }
    return r;
  }, []);

  //if resultByDate.length >= 5, sliced the array
 let sliced;
  if (resultByDate.length >= 7) {
    sliced = resultByDate.slice(-7);
  } else {
    sliced = resultByDate;
  }

  const labels = sliced.map((item) => new Date(item.date));

  const valueFormatter = (date) =>
    date.toLocaleDateString("zh-TW", {
      month: "2-digit",
      day: "2-digit",
    });
    const colors = mode === "dark"? "#ae8881":"#a22514";

  return (
      <LineChart
        xAxis={[
          {
            data: labels,
            scaleType: "time",
            valueFormatter,
          },
        ]}
        series={[
          {
            data: sliced.map((item) => item.amount),
            color: colors
          }
        ]}
        height={300}
        grid={{ vertical: true, horizontal: true }}
      />
  );
};
export default SimpleLine;
