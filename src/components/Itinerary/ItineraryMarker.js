import React, { useState } from "react";
//firestore
import { collection, orderBy, query } from "firebase/firestore";
import db from "../../firebase";
//react-firestore-hooks
import { useCollectionData } from "react-firebase-hooks/firestore";
//mui
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
//react-map-gl
import { Marker, Popup } from "react-map-gl";
//components
import ItineraryPopup from "./ItineraryPopup";
//data
import { ColorList } from "./ItineraryCardData";

const ItineraryMarker = ({ path }) => {
  const [selected, setSelected] = useState(false);
  const q = query(collection(db, path), orderBy("eventId", "asc"));
  const [item, loading, error] = useCollectionData(q);

  return (
    <>
      {item?.map((b, i) => (
        <Marker
          longitude={b.longitude}
          latitude={b.latitude}
          onClick={() => {
            setSelected(b);
            //setShowPopup(true);
          }}
        >
          {/*Dynamic icon size*/}
          <Box fontSize={{ sm: 24, md: 48, lg: 96, xl: 128 }}>
            <Icon sx={{ color: ColorList[b.iconType] }}>{b.icon}</Icon>
          </Box>
        </Marker>
      ))}
      {selected ? (
        <Popup
          longitude={selected.longitude}
          latitude={selected.latitude}
          anchor="bottom"
          closeOnClick={false}
          //onClose={() => setShowPopup(false)}
          onClose={() => setSelected(null)}
        >
          {/*Custom Popup design */}
          <ItineraryPopup
            popupColor={ColorList[selected.iconType]}
            popupIcon={selected.icon}
            title={selected.location}
            subheader={selected.address}
          />
        </Popup>
      ) : null}
    </>
  );
};
export default ItineraryMarker;
