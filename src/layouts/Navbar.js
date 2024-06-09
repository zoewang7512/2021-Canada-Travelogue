import React, { useContext } from "react";
import { DarkModeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
//i18n
import {useTranslation } from "react-i18next";
//mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import IconButton from "@mui/material/IconButton";


const Navbar = () => {

  const { t } = useTranslation();
  const {NavbarTitle,NavbarItinerary,NavbarTransaction,NavbarBudgetCalculator} =t('navbar');

  const { mode, toggleMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleMode();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" sx={{ mr: 2 }}>
            {NavbarTitle}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Button
              component={Link}
              to="/itinerary"
              startIcon={<MapRoundedIcon />}
              color="inherit"
            >
              <Typography sx={{ display: { xs: "none", md: "block" } }}>
              {NavbarItinerary}
              </Typography>
            </Button>

            <Button
              component={Link}
              to="/transactions"
              disableElevation
              startIcon={<ReceiptLongRoundedIcon />}
              color="inherit"
            >
              <Typography sx={{ display: { xs: "none", md: "block" } }}>
                {NavbarTransaction}
              </Typography>
            </Button>
            <Button
              component={Link}
              to="/calculator"
              disableElevation
              startIcon={<CalculateRoundedIcon />}
              color="inherit"
            >
              <Typography sx={{ display: { xs: "none", md: "block" } }}>
                {NavbarBudgetCalculator}
              </Typography>
            </Button>
            <IconButton
              sx={{ ml: 1 }}
              onClick={handleClick}
              color="inherit"
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;