import React, { useContext } from "react";
import { DarkModeContext } from "../../context/ThemeContext";
import { useCosts } from "../../context/ShowDataContext";
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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


const ItineraryCard = ({ item }) => {
  const { mode } = useContext(DarkModeContext);
  const { toggleTitle } = useCosts();
  return (
    <Card
      sx={{
        width: "100%",
        mixWidth: 150,
      }}
      onClick={() => toggleTitle(item.index)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          width="80"
          image={mode === "dark" ? item.icond : item.iconw}
          sx={{ padding: "1em 0px 0px 0px", objectFit: "contain" }}
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="subtitle1" component="div">
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
