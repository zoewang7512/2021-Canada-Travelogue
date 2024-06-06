import * as React from "react";
//i18n
import {useTranslation } from "react-i18next";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { ColorList } from "../../data";

const Donut = ({ data }) => {
  const size = {
    height: 250,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    //currencyFormatter
    const currencyFormatterForPie = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "TWD",
      minimumFractionDigits: 0,
    });
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {currencyFormatterForPie.format(children)}
      </StyledText>
    );
  }
  //get the sum of array
  const sum = data.reduce((accumulator, object) => {
    return accumulator + object.value;
  }, 0);
  
  //i18n
  const { t } = useTranslation();
  const {Accommodation,Food,Transportation,Tuition,Entertainment,Shopping,Insurance,Other} =t('calculator'); 

  const PieData =[ 
    { id: 0, value: data[0].value, label: Accommodation },
  { id: 1, value: data[1].value, label: Food },
  { id: 2, value: data[2].value, label: Transportation },
  { id: 3, value: data[3].value, label: Tuition },
  { id: 4, value: data[4].value, label: Entertainment},
  { id: 5, value: data[5].value, label: Shopping},
  { id: 6, value: data[6].value, label: Insurance},
  { id: 7, value: data[7].value, label: Other },
]

  return (
    <PieChart
      colors={ColorList}
      series={[{ //data,
        data: PieData,
         innerRadius: 80 }]}
      {...size}
      legend={{ hidden: true }}
      margin={{ top: 10, bottom: 10, right: 5 }}
      grid={{ vertical: true, horizontal: true }}
      
    >
      <PieCenterLabel>{sum}</PieCenterLabel>
    </PieChart>
  );
};
export default Donut;
