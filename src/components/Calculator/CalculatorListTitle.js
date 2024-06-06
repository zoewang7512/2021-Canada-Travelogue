import React from "react";
//i18n
import {useTranslation } from "react-i18next";
//mui
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const CalculatorListTitle = () => {
   //i18n
 const { t } = useTranslation();
 const {CalculatorListCol1,CalculatorListCol2,CalculatorListCol3,CalculatorListCol4} =t('calculator');

  const CalculatorListTitleStyle = ({ title, color }) => {
    return (
      <ListItemText
        disableTypography
        primary={
          <Typography
            color={color}
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        }
      />
    );
  };
  return (
    <ListItem>
      <ListItemIcon></ListItemIcon>
      <CalculatorListTitleStyle title={CalculatorListCol1} color={"text.primary"} />
      <CalculatorListTitleStyle title={CalculatorListCol2} color={"text.primary"} />
      <CalculatorListTitleStyle title={CalculatorListCol3} color={"text.primary"} />
      <CalculatorListTitleStyle title={CalculatorListCol4} color={"primary"} />
    </ListItem>
  );
};
export default CalculatorListTitle;
