import React, { useState, useEffect } from "react";
//dayjs
import dayjs from "dayjs";
//firestore
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import db from "../firebase";
//i18n
import {useTranslation } from "react-i18next";
//components
import {TopExpences,RecentTransactions} from "../components/Dashboard/History";
import DashboardCard from "../components/Dashboard/DashboardCard";
import DashboardDate from "../components/Dashboard/DashboardDate";
//charts
import SimpleLine from "../components/Charts/SimpleLine";
import Donut from "../components/Charts/Donut";
import DonutTableItem from "../components/Charts/DonutTableItem";
//mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from '@mui/material/Chip';
import Table from "@mui/material/Table";
import { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const Home = () => {
  
  const { t } = useTranslation();
  const {Title,CardText1,CardText2,CardText3,CardText4,TotalExpenseTitle,ExpenseStatisticsTitle,RecentTransactionsTitle,TopExpencesTitle,ExpenseStatisticsChip} =t('dashboard');

  const [startday, setStartday] = useState(dayjs("2021-11-01"));
  const [endday, setEndday] = useState(dayjs("2022-03-31"));
  //data from firestore
  const [filterTrans, setFilterTrans] = useState([
    {
      name: "Loading...",
      id: "initial",
    },
  ]);

  //get the Transactions from db
  useEffect(() => {
    const collectionRef = collection(db, "Transactions");
    const unsub = onSnapshot(
      query(
        collectionRef,
        where("date", ">=", new Date(startday)),
        where("date", "<=", new Date(endday))
      ),
      (snapshot) =>
        setFilterTrans(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    );
    return unsub;
  }, [startday, endday]);

  //calculate the result
  function calculateDaysBetweenDates(startDate, endDate) {
    const startMillis = new Date(startDate).getTime();
    const endMillis = new Date(endDate).getTime();
    const millisDifference = endMillis - startMillis;
    const daysDifference = millisDifference / (1000 * 60 * 60 * 24);
    return Math.round(daysDifference); // Use Math.round() to get a whole number
  }
  const days = calculateDaysBetweenDates(startday, endday);
  const budget = days * 6333;
  //calculate the costs
  const costs = filterTrans.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = budget - costs;

  //sum the value if the category is same
  const result = filterTrans.reduce((r, { category, amount }) => {
    var temp = r.find((o) => o.category === category);
    if (temp) {
      temp.amount += amount;
    } else {
      r.push({ category, amount });
    }
    return r;
  }, []);
  //format the result to data for pie chart
  const arr2 = [
    { id: 0, label: "住宿費用" },
    { id: 1, label: "飲食費用" },
    { id: 2, label: "交通費用" },
    { id: 3, label: "教育費用" },
    { id: 4, label: "休閒費用" },
    { id: 5, label: "購物費用" },
    { id: 6, label: "保險費用" },
    { id: 7, label: "其他" },
  ];
  const result2 = arr2.map((e) => {
    for (let element of result) {
      if (e.label === element.category)
        Object.assign(e, { value: element.amount });
    }
    return e;
  });

  //currencyFormat
   const formatter= 
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
  });

  return (
    <Box bgcolor={"background.default"} p={2} color={"text.primary"}>
        <Grid container  spacing={2}>
          {/*Title Area*/}
          <Grid item xs={12} md={6}>
            <Typography variant="h5">{Title}</Typography>
          </Grid>
           {/*Date Picker*/}
          <Grid item xs={12} md={6}>
            <DashboardDate
              startday={startday}
              setStartday={setStartday}
              endday={endday}
              setEndday={setEndday}
            />
          </Grid>
          {/*4 card area */}
          <Grid item xs={6} md={3}>
            <DashboardCard
              icon={"request_quote"}
              amount={formatter.format(budget)}
              text={CardText1}
              color={"#488ecd"}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              icon={"attach_money"}
              amount={formatter.format(costs)}
              text={CardText2}
              color={"#e68380"}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              icon={"savings"}
              amount={formatter.format(balance)}
              text={CardText3}
              color={"#88eccf"}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              icon={"calendar_today"}
              amount={days}
              text={CardText4}
              color={"#52bad4"}
            />
          </Grid>
          {/*Pie Chart Area*/}
          <Grid item xs={12} md={8}>
          <Card sx={{ height: "100%" }}>
              <CardContent>
                {/**Total expense */}
                <Typography variant="subtitle1">
                  {TotalExpenseTitle}
                </Typography>
                <Stack
                  direction={{ sm: "column", md: "row" }}
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Donut data={result2} />
                  <Table size="small" aria-label="a dense table"
                   sx={{ minWidth: 360,[`& .${tableCellClasses.root}`]: { borderBottom: "none"}, }}
                  >
                    <TableBody>
                    {result2.map((item, index) => {
                      return (
                        <DonutTableItem index={index} item={item} sum={costs} fontsize={"0.8rem"}/>
                      );
                    })}
                    </TableBody>
                  </Table>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        {/*Line Chart Area*/}
          <Grid item xs={12} md={4}>
          <Card  sx={{ height: "100%" }}>
              <CardContent>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent= 'space-between' alignItems= {{ xs: 'flex-start', sm: 'center' }}>
                <Typography variant="subtitle1" >{ExpenseStatisticsTitle}</Typography>
                <Chip label={ExpenseStatisticsChip} color="primary"/>
                </Stack>
                  <SimpleLine data={filterTrans}/>
              </CardContent>
            </Card>
          </Grid>
           {/*Recent Transactions Area*/}
          <Grid item xs={12} md={6}>
             <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>{RecentTransactionsTitle}</Typography>
                <RecentTransactions/>
              </CardContent>
            </Card>
          </Grid>
          {/*Top Expences Area*/}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>{TopExpencesTitle}</Typography>
                <TopExpences/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Home;