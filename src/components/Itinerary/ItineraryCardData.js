import Island from "../../assets/island.png";
import Islandd from "../../assets/island-d.png";
import DogSled from "../../assets/dog-sled.png";
import DogSledd from "../../assets/dog-sled-d.png";
import FunctionalImage from "../../assets/northern-lights.png";
import FunctionalImageWhite from "../../assets/northern-lights-white.png";
import SpaceNeedle from "../../assets/space-needle.png";
import SpaceNeedled from "../../assets/space-needle-d.png";
import Universal from "../../assets/universal.png";
import Universald from "../../assets/universal-d.png";
import SlotMach from "../../assets/slot-machine.png";
import SlotMachd from "../../assets/slot-machine-d.png";
import HollyWood from "../../assets/hollywood.png";
import HollyWoodd from "../../assets/hollywood-d.png";

export const ItineraryCardData = [
  {
    index: 1,
    title: "Victoria",
    year: "2021",
    date: "11/27 - 11/30",
    iconw: Island,
    icond: Islandd,
  },
  {
    index: 2,
    title: "Whitehorse",
    year: "2022",
    date: "1/11 - 1/14",
    iconw: DogSled,
    icond: DogSledd,
  },
  {
    index: 3,
    title: "Whitehorse",
    year: "2022",
    date: "2/28 - 3/8",
    iconw: FunctionalImage,
    icond: FunctionalImageWhite,
  },
  {
    index: 4,
    title: "Seattle",
    year: "2022",
    date: "3/10 - 3/15",
    iconw: SpaceNeedle,
    icond: SpaceNeedled,
  },
  {
    index: 5,
    title: "L.A.",
    year: "2022",
    date: "3/16 -3/19",
    iconw: Universal,
    icond: Universald,
  },
  {
    index: 6,
    title: "Las Vegas",
    year: "2022",
    date: "3/20 - 3/24",
    iconw: SlotMach,
    icond: SlotMachd,
  },
  {
    index: 7,
    title: "L.A.",
    year: "2022",
    date: "3/25 - 3/31",
    iconw: HollyWood,
    icond: HollyWoodd,
  },
];

//VictoriaData Cost data
export const InitialCost = [
  { id: 1, value: 4338, label: "住宿費用" },
  { id: 2, value: 3986, label: "飲食費用" },
  { id: 3, value: 1551, label: "交通費用" },
  { id: 4, value: 0, label: "教育費用" },
  { id: 5, value: 1356, label: "休閒費用" },
  { id: 6, value: 500, label: "購物費用" },
  { id: 7, value: 0, label: "保險費用" },
  { id: 8, value: 0, label: "其他" },
];

//color list
export const ColorList = [
  "#8fe2c8",
  "#e68380",
  "#d1dc4e",
  "#e2d048",
  "#b68071",
  "#3e85f2",
  "#b35bcc",
  "#52bad4",
];
