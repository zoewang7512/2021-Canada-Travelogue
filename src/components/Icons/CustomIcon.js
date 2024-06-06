import Avatar from "@mui/material/Avatar";
//icons

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import LocalPlayRoundedIcon from "@mui/icons-material/LocalPlayRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";

//multiple components in one js file
//https://codesandbox.io/s/35vsj?file=/src/App.js:23-73

export function AccommodationIcon() {
  return (
    <Avatar sx={{ bgcolor: "#8fe2c8" }} variant="rounded">
      <OtherHousesRoundedIcon />
    </Avatar>
  );
}

export function FoodIcon() {
  return (
    <Avatar sx={{ bgcolor: "#e68380" }} variant="rounded">
      <RestaurantRoundedIcon />
    </Avatar>
  );
}
export function TransportationIcon() {
  return (
    <Avatar sx={{ bgcolor: "#d1dc4e" }} variant="rounded">
      <AirportShuttleRoundedIcon />
    </Avatar>
  );
}
export function EntertainmentIcon() {
  return (
    <Avatar sx={{ bgcolor: "#b68071" }} variant="rounded">
      <LocalPlayRoundedIcon />
    </Avatar>
  );
}
export function TuitionIcon() {
  return (
    <Avatar sx={{ bgcolor: "#e2d048" }} variant="rounded">
      <SchoolRoundedIcon />
    </Avatar>
  );
}
export function ShoppingIcon() {
  return (
    <Avatar sx={{ bgcolor: "#3e85f2" }} variant="rounded">
      <LocalMallRoundedIcon />
    </Avatar>
  );
}
export function InsuranceIcon() {
  return (
    <Avatar sx={{ bgcolor: "#b35bcc" }} variant="rounded">
      <HealthAndSafetyRoundedIcon />
    </Avatar>
  );
}

export function OtherIcon() {
  return (
    <Avatar sx={{ bgcolor: "#52bad4" }} variant="rounded">
    <CategoryRoundedIcon />
    </Avatar>
  );
}
