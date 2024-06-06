import React, { useState, useEffect } from "react";
//i18n
import {useTranslation } from "react-i18next";
//mui
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";

//components
import Donut from "../components/Charts/Donut";
import CalculatorListTitle from "../components/Calculator/CalculatorListTitle";
import CalculatorInput from "../components/Calculator/CalculatorInput";
//import { ColorList } from "../components/Itinerary/ItineraryCardData";
import { ColorList } from "../data";
//mui table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const Calculator = () => {

 //i18n
 const { t } = useTranslation();
 const {CalculatorListCol1,CalculatorListCol2,CalculatorListCol3,CalculatorListCol4} =t('calculator');

  const [values, setValues] = useState([
    { key: 1,  value: 5602, refPer: 0.66 },
    { key: 2,  value: 1008, refPer: 0.12 },
    { key: 3,  value: 375, refPer: 0.04 },
    { key: 4,  value: 0, refPer: 0 },
    { key: 5, value: 1172, refPer: 0.14 },
    { key: 6,  value: 0, refPer: 0 },
    { key: 7, value: 93, refPer: 0.01 },
    { key: 8,  value: 211, refPer: 0.03 },
  ]);

  //new array for tables
  const [combArr, setCombArr] = useState([]);

  function handleUpdate(key, newValue) {
    // find input based on key
    const index = values.findIndex((item) => item.key === key);
    // copy array
    const copy = [...values];
    // update copy's element with new item using new value
    copy[index] = { ...values[index], value: parseInt(newValue) };
    // update state
    setValues(copy);
  }

  useEffect(() => {
    const arrSum = values.reduce((acc, curr) => acc + curr.value, 0);
    const result = values.map(({ key, value,  refPer }) => ({
      key,
      value,
      refPer,
      per: value / arrSum,
    }));
    setCombArr(result);
  }, [values]);

  //const ColorTitle=["住宿費用","飲食費用","交通費用","教育費用","休閒費用","購物費用","保險費用","其他"]
  const ColorTitle=[t("calculator.Accommodation"),t("calculator.Food"), t("calculator.Transportation"),t("calculator.Tuition"),t("calculator.Entertainment"),t("calculator.Shopping"),t("calculator.Insurance"),t("calculator.Other")];

  return (
    <Box bgcolor={"background.default"} p={2} color={"text.primary"}>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <Donut data={values} />
            </Grid>
            <Grid item xs={12} sm={6}>
           
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow sx={{
      "& th": {
        fontWeight: "bold",
      }
    }}>
          <TableCell ></TableCell>
            <TableCell >{CalculatorListCol1}</TableCell>
            <TableCell align="right">{CalculatorListCol2}</TableCell>
            <TableCell align="right">{CalculatorListCol3}</TableCell>
            <TableCell align="right">{CalculatorListCol4}</TableCell>
          </TableRow>
        </TableHead>
       
        <TableBody>
        {combArr.map(({ key, value, per, refPer }) => (
            <TableRow
              key={key}
              //sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <SquareRoundedIcon sx={{ fontSize: 15, color: ColorList[key - 1] }}/>
              </TableCell>
              <TableCell >{ColorTitle[key - 1]}</TableCell>
              <TableCell align="right">
                <CalculatorInput
                            key={key}
                            value={value}
                            setValue={(val) => handleUpdate(key, val)}
                          /></TableCell>
              <TableCell align="right">{per.toLocaleString("en", {
                          style: "percent",
                        })}</TableCell>
              <TableCell align="right" sx={{ color:"primary.main"}}>{refPer.toLocaleString("en", {
                          style: "percent",
                        })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Calculator;
