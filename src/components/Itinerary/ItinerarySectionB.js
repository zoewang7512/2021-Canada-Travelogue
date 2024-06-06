import { useState, useEffect } from "react";
//useContext
import { useCosts } from "../../context/ShowDataContext";
//mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
//chart
import Donut from "../Charts/Donut";
import DonutTableItem from "../Charts/DonutTableItem";

const ItinerarySectionB = () => {
  const { title, cost } = useCosts();
  const [showData, setShowData] = useState(cost);

  useEffect(() => {
    setShowData(cost);
  }, [cost]);

  const onClickSum = () => {
    setShowData(cost);
  };

  const onClickAvg = () => {
    setShowData(newAvg);
  };

  const avg = cost.map((number) => number.value / 2);
  const newAvg = cost.map((obj, i) => ({
    ...obj,
    value: avg[i],
  }));

  //get the sum of array
  const total = showData.reduce((accumulator, object) => {
    return accumulator + object.value;
  }, 0);

  return (
    <section id="B">
      <Box
        minHeight="100vh"
        pt={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <Typography variant="h4">
          {title}
        </Typography>
        <ButtonGroup variant="outlined" size="large" color="primary"  sx={{ my: 4 }}>
                <Button onClick={onClickSum} startIcon={<GroupIcon />}>
                  Two people
                </Button>
                <Button
                  onClick={onClickAvg}
                  startIcon={<AccessibilityNewIcon />}
                >
                  Per person
                </Button>
              </ButtonGroup>
          
          <Grid container spacing={2}   alignItems="center">
            <Grid item xs={12} sm={6}>
            {/*Chart Area*/}
              <Donut data={showData} />
              </Grid>
            <Grid item xs={12} sm={6}>
        
          <Table size="small" aria-label="a dense table"
                   sx={{ maxWidth: 480,[`& .${tableCellClasses.root}`]: { borderBottom: "none"}, }}
                  >
                    <TableBody>
                    {showData.map((item, index) => {
                      return (
                        <DonutTableItem index={index} item={item} sum={total} fontsize={"0.8rem"}/>
                      );
                    })}
                    </TableBody>
                  </Table>
                  </Grid>
                  </Grid>
      </Box>
    </section>
  );
};
export default ItinerarySectionB;
