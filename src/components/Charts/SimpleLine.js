import React, { useContext } from "react";
import dayjs from "dayjs";
import { LineChart } from "@mui/x-charts/LineChart";
import { DarkModeContext } from "../../context/ThemeContext";

const SimpleLine = ({ data }) => {

  const { mode, toggleMode } = useContext(DarkModeContext);

  //轉變date的格式的function
  function DateString1(value) {
    const time = value && value.toDate().toLocaleDateString();
    const timedate = dayjs(time).format("YYYY/MM/DD");
    return timedate;
  }

  //將轉變好的date放入array內
  const result = data.map((obj) => ({
    ...obj,
    date: DateString1(obj.date), //obj.date
  }));

  //計算每天的花費金額 calculate the value each date
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
  if (resultByDate.length >= 5) {
    sliced = resultByDate.slice(-5);
  } else {
    sliced = resultByDate;
  }

  //const labels = resultByDate.map((item) => new Date(item.date));
  const labels = sliced.map((item) => new Date(item.date));

  const valueFormatter = (date) =>
    date.toLocaleDateString("zh-TW", {
      month: "2-digit",
      day: "2-digit",
    });
    //line color
    const colors = mode === "dark"? "#ae8881":"#a22514";

  return (
    <>
    
  
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
            //data: [2, 5.5, 2, 8.5, 1.5, 5],
            //data: resultByDate.map((item) => item.amount),
            data: sliced.map((item) => item.amount),
            color: colors
          }
        ]}
        
        height={300}
        grid={{ vertical: true, horizontal: true }}
      />
     
    </>
  );
};
export default SimpleLine;
