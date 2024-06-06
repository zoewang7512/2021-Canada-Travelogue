import React, { useContext } from "react";
//dayjs
import * as dayjs from "dayjs";
//useContext
import { useCosts } from "../../context/ShowDataContext";
//mui
import Timeline from "@mui/lab/Timeline";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
//icons
import Icon from "@mui/material/Icon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
//components
import ItineraryTimeLineItem from "./ItineraryTimeLineItem";

const ItineraryTimeLine = ({ item, NavigateButton }) => {
  const dayjs = require("dayjs");
  const { trip } = useCosts();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <CalendarMonthIcon />
        <Typography variant="h6" align="center">
          {dayjs(item.name).format("YYYY-MM-DD")}
        </Typography>
      </Stack>
      <Timeline>
        <ItineraryTimeLineItem
          path={`${trip}/${item.name}/events`}
          NavigateButton={NavigateButton}
        />
      </Timeline>
    </>
  );
};
export default ItineraryTimeLine;
