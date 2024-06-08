import React, { useState, useEffect } from "react";
//i18n
import {useTranslation } from "react-i18next";
//components
import Donut from "../components/Charts/Donut";
import CalculatorInput from "../components/Calculator/CalculatorInput";
import { ColorList } from "../components/Icons/CustomIcon";
//mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
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
    { key: 1,  value: 263586, refPer: 0.28 },
    { key: 2,  value: 107358, refPer: 0.11 },
    { key: 3,  value: 148180	, refPer: 0.16 },
    { key: 4,  value:191984, refPer: 0.2 },
    { key: 5, value: 104767, refPer: 0.11 },
    { key: 6,  value: 93418	, refPer: 0.1 },
    { key: 7, value: 15560, refPer: 0.02 },
    { key: 8,  value: 22872	, refPer: 0.02 },
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
                  <TableRow sx={{ "& th": {fontWeight: "bold"}}}>
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
                    >
                      <TableCell component="th" scope="row">
                        <SquareRoundedIcon sx={{ fontSize: 15, color: ColorList[key - 1] }}/>
                      </TableCell>
                      <TableCell >{ColorTitle[key - 1]}</TableCell>
                      <TableCell align="right">
                        <CalculatorInput
                          key={key}
                          value={value}
                          setValue={(val) => handleUpdate(key, val)}/>
                      </TableCell>
                      <TableCell align="right">{per.toLocaleString("en", {style: "percent"})}</TableCell>
                      <TableCell align="right" sx={{ color:"primary.main"}}>{refPer.toLocaleString("en", {style: "percent"})}</TableCell>
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
