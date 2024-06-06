import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
//i18n
import {useTranslation } from "react-i18next";
//mui
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
//components
import Dot from "../components/Icons/Dot";
//firestore
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../firebase";

const Transactions = () => {

  const [trans, setTrans] = useState([{ name: "Loading...", id: "initial" }]);
  const [query, setquery] = useState("");

  //filterdata
  const filteredData = trans.filter((item) => {
    return query.toLowerCase() === ""
      ? item
      : item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query);
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Transactions"), (snapshot) =>
      setTrans(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  //i18n
 const { t } = useTranslation();
 const {SearchText,ColumnDate,ColumnCategory,ColumnDescription,ColumnAmount} =t('transactions');

  const columns = [
    {
      field: "date",
      headerName: ColumnDate,
      minWidth: 120,
      flex: 0.5,
      //type: "dateTime",
      //valueGetter: (value) => value && new Date(value),
      //valueGetter: ({ value }) =>
        //value && new Date(value.seconds * 1000 + value.nanoseconds / 1000000),
      valueGetter: ( value) =>
        dayjs( value && new Date(value.seconds * 1000 + value.nanoseconds / 1000000)).format("YYYY/MM/DD")
    },
    {
      field: "category",
      headerName: ColumnCategory,
      minWidth: 50,
      flex: 1,
      renderCell: (params) => {
        return <Dot category={params.row.category} />;
      },
    },
    {
      field: "description",
      headerName: ColumnDescription,
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      minWidth: 300,
    },
    {
      field: "amount",
      headerName: ColumnAmount,
      type: "number",
      minWidth: 120,
      flex: 1,
      cellClassName: 'red-number-cell',
      valueFormatter: (value)=>new Intl.NumberFormat("zh-Hant", {
        style: "currency",
        currency: "TWD",
        currencyDisplay: "code",
        minimumFractionDigits: 0,
      }).format(
        value,
      )
  
    },
  ];

  return (
    <Box bgcolor={"background.default"} p={2} color={"text.primary"} sx={{  '& .red-number-cell': {
      color: "#a22514",
    },}}>
      <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
        <Stack spacing={2} justifyContent="space-between">
          {/*search bar*/}
          <Paper
            component="form"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={SearchText}
              value={query}
              onInput={(e) => setquery(e.target.value)}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon style={{ fill: "primary" }} />
            </IconButton>
          </Paper>
          {/*data grid*/}
          <Paper>
            <DataGrid
              rows={filteredData}
              //rows={trans}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};
export default Transactions;
