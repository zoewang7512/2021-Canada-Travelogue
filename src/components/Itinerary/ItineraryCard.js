import React, { useContext } from "react";
//useContext
import { DarkModeContext } from "../../context/ThemeContext";

import { useCosts } from "../../context/ShowDataContext";
//import { SDataContext } from "../../context/ShowDataContext";
//mui
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Stack,
  Chip,
} from "@mui/material";
//icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ItineraryCard = ({ item }) => {
  //useContext
  const { mode } = useContext(DarkModeContext);
  const { toggleTitle } = useCosts();
  //const { toggleTitle } = useContext(SDataContext);
  return (
    //小icon
    <Card
      sx={{
        width: "100%",
        mixWidth: 150,
      }}
      onClick={() => toggleTitle(item.index)}
    >
      {/*sx={{ minWidth: 100, maxWidth: 150 }}>*/}
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          width="80"
          //image={FunctionalImage}
          image={mode === "dark" ? item.icond : item.iconw}
          sx={{ padding: "1em 0px 0px 0px", objectFit: "contain" }}
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="subtitle1" component="div">
            {/*Vancouver Island */}
            {item.title}
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            spacing={1}
          >
            <Chip
              icon={<CalendarMonthIcon />}
              label={item.year}
              color="primary"
              size="small"
            />
            <Typography variant="subtitle2">{item.date}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ItineraryCard;
