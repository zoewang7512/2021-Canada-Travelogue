//mui
import Box from "@mui/material/Box";
//components
import ItinerarySectionA from "../components/Itinerary/ItinerarySectionA";
import ItinerarySectionB from "../components/Itinerary/ItinerarySectionB";
import ItinerarySectionC from "../components/Itinerary/ItinerarySectionC";

const Itinerary = () => {
  return (
    <Box bgcolor={"background.default"} p={2} color={"text.primary"}>
      <ItinerarySectionA />
      <ItinerarySectionB />
      <ItinerarySectionC />
    </Box>
  );
};
export default Itinerary;
