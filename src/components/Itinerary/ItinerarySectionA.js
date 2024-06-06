import React from "react";
//mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//components
import ItineraryCard from "./ItineraryCard";
import ItineraryTitle from "./ItineraryTitle";
//data
import { ItineraryCardData } from "./ItineraryCardData";
import { HashLink } from "react-router-hash-link";

const ItinerarySectionA = () => {
  return (
    <section id="A">
      <Box
        minHeight="80vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          <ItineraryTitle />
        </Typography>

        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {ItineraryCardData.map((item, index) => {
            return (
              <Grid item xs={6} sm={3} md={12 / 7}>
                <HashLink smooth to="/itinerary#B">
                  <ItineraryCard key={index} item={item} />
                </HashLink>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
};
export default ItinerarySectionA;
