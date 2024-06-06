//i18n
import {useTranslation } from "react-i18next";
//mui
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { ColorList } from "../../data"


const DonutTableItem = ({ index, item, sum }) => {
  //get percent
  const getArcLabel = (params) => {
    const percent = params / sum;
    return `${(percent * 100).toFixed(0)}%`;
  };

  //i18n
  const { t } = useTranslation();
  const ColorTitle=[t("calculator.Accommodation"),t("calculator.Food"), t("calculator.Transportation"),t("calculator.Tuition"),t("calculator.Entertainment"),t("calculator.Shopping"),t("calculator.Insurance"),t("calculator.Other")];

  return (
    <TableRow
    key={index}
    //sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell component="th" scope="row">
    <SquareRoundedIcon sx={{ fontSize: 15, color: ColorList[index] }}/>
    </TableCell>
    <TableCell >{ColorTitle[index]}</TableCell>
   
    <TableCell align="right">{new Intl.NumberFormat().format(item.value)}</TableCell>
    <TableCell align="right" sx={{ color:"primary.main"}}>{getArcLabel(item.value)}</TableCell>
  </TableRow>
  );
};
export default DonutTableItem;
