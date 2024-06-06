import React, { useContext } from "react";
//firestore
import { collection, orderBy, query } from "firebase/firestore";
import db from "../../firebase";
//react-firestore-hooks
import { useCollectionData } from "react-firebase-hooks/firestore";
//mui
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//icons
import Icon from "@mui/material/Icon";
//data
import { ColorList } from "./ItineraryCardData";

const ItineraryTimeLineItem = ({ path, NavigateButton }) => {
  const q = query(collection(db, path), orderBy("eventId", "asc"));
  //const options = { idField:  };
  const [item, loading, error] = useCollectionData(q);

  return (
    <>
      {item?.map((b) => (
        <div id="b.eventId">
          <Box
            variant="text"
            sx={{
              ":hover": {
                borderRadius: "20px",
                cursor: "pointer",
                color: "#fff",
                bgcolor: "primary.main",
              },
            }}
            style={b.latitude === null ? { pointerEvents: "none" } : {}}
            onClick={() => NavigateButton(b.longitude, b.latitude)}
          >
            <TimelineItem>
              {/*左邊*/}
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                //color="text.secondary"
              >
                {b.time}
              </TimelineOppositeContent>
              {/*中間的圖案*/}
              <TimelineSeparator>
                <TimelineConnector />
                {/*<TimelineDot sx={{ bgcolor: iconColor }}>{b.icon}</TimelineDot>*/}
                <TimelineDot sx={{ bgcolor: ColorList[b.iconType] }}>
                  <Icon>{b.icon}</Icon>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              {/*右邊*/}
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="subtitle1" component="span">
                  {b.action}
                </Typography>
                <Typography variant="subtitle2">{b.location}</Typography>
              </TimelineContent>
            </TimelineItem>
          </Box>
        </div>
      ))}
    </>
  );
};
export default ItineraryTimeLineItem;
