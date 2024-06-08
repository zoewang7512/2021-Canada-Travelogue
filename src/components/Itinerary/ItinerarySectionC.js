import React, { useRef } from "react";
//useContext
import { useCosts } from "../../context/ShowDataContext";
//use firestore
import { collection, query, orderBy } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import db from "../../firebase";
//components
import ItineraryTimeLine from "./ItineraryTimeLine";
import ItineraryMap from "./ItineraryMap";
//mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const ItinerarySectionC = () => {

  const { trip } = useCosts();
  const mapRef = useRef(null);

  const q = query(collection(db, trip), orderBy("index", "asc"));
  const [timetable, loading, error] = useCollectionData(q);

  //fly to function
  const NavigateButton = (a, b) => {
    mapRef.current?.flyTo({ center: [a, b], zoom: 13, essential: true });
  };

  return (
    <section id="C">
      <Box
        minHeight="80vh"
        pt={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          {/*TimeLine Area */}
          <Grid item xs={12} sm={5}>
            <Box sx={{ height: "80vh", overflow: "auto" }}>
              {timetable?.map((item) => {
                return (
                  <div key={item.id}>
                    <ItineraryTimeLine
                      item={item}
                      NavigateButton={NavigateButton}
                    />
                  </div>
                );
              })}
            </Box>
          </Grid>
          {/*Mapbox Area */}
          <Grid item xs={12} sm={7}>
            <ItineraryMap mapRef={mapRef} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};
export default ItinerarySectionC;
