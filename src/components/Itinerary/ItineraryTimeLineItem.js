import React from "react";
//firestore
import { collection, orderBy, query } from "firebase/firestore";
import db from "../../firebase";
//react-firestore-hooks
import { useCollectionData } from "react-firebase-hooks/firestore";
//components
import { ColorList } from "../Icons/CustomIcon";
//mui
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";


const ItineraryTimeLineItem = ({ path, NavigateButton }) => {

  const q = query(collection(db, path), orderBy("eventId", "asc"));
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
              {/*Left*/}
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
              >
                {b.time}
              </TimelineOppositeContent>
              {/*Center*/}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ bgcolor: ColorList[b.iconType] }}>
                  <Icon>{b.icon}</Icon>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              {/*Right*/}
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
