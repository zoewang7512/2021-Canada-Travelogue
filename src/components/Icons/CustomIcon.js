//mui
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

//color list
export const ColorList = [
  "#8fe2c8",
  "#e68380",
  "#d1dc4e",
  "#e2d048",
  "#b68071",
  "#3e85f2",
  "#b35bcc",
  "#52bad4"
];

export function AccommodationIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[0] }} variant="rounded">
      <OtherHousesRoundedIcon />
    </Avatar>
  );
}

export function FoodIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[1] }} variant="rounded">
      <RestaurantRoundedIcon />
    </Avatar>
  );
}
export function TransportationIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[2] }} variant="rounded">
      <AirportShuttleRoundedIcon />
    </Avatar>
  );
}
export function EntertainmentIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[3] }} variant="rounded">
      <LocalPlayRoundedIcon />
    </Avatar>
  );
}
export function TuitionIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[4] }} variant="rounded">
      <SchoolRoundedIcon />
    </Avatar>
  );
}
export function ShoppingIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[5]}} variant="rounded">
      <LocalMallRoundedIcon />
    </Avatar>
  );
}
export function InsuranceIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[6] }} variant="rounded">
      <HealthAndSafetyRoundedIcon />
    </Avatar>
  );
}

export function OtherIcon() {
  return (
    <Avatar sx={{ bgcolor: ColorList[7] }} variant="rounded">
    <CategoryRoundedIcon />
    </Avatar>
  );
}
