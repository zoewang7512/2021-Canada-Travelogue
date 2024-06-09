import React, { useContext } from "react";
import { HashRouter, Routes, Route ,Navigate } from "react-router-dom";
import { DarkModeContext } from "./context/ThemeContext";
//pages
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Itinerary from "./pages/Itinerary";
import Calculator from "./pages/Calculator";
import ErrorPage from "./pages/ErrorPage";
//mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

//button to the top
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}


function App(props) {

  const { mode } = useContext(DarkModeContext);
  const darkTheme = createTheme({
    typography: {
      fontFamily: ["Short Stack", "Zen Maru Gothic", "cursive"].join(","),
    },
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#a22514",
            },
            secondary: {
              main: "#ae8881",
            },
            // palette values for light mode
            background: {
              default: "#eeeeee",
              //paper: "#ffdad4"
              paper: "#fafaff",
            },
            text: {
              primary: "#400200",
              secondary: "#3d0700",
            },
          }
        : {
            primary: {
              main: "#ae8881",
            },
            secondary: {
              main: "#a22514",
            },
            // palette values for dark mode
            background: {
              default: "#201a19",
              paper: "#201a19",
            },
            text: {
              primary: "#ede0dd",
              secondary: "#9e9e9e",
            },
          }),
    },
  });
  return (
    <div className="App">
       <HashRouter>
       <ThemeProvider theme={darkTheme}>
       <Navbar />
          <CssBaseline />
          <Toolbar id="back-to-top-anchor" />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/calculator" element={<Calculator />} />
            {/*<Route path='*' element={<ErrorPage />}/>*/}
            <Route path='/404' element={<ErrorPage/>} />
            <Route path='*' element={<Navigate replace to='/404'/>} />
          </Routes>
          <Footer />
          <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
          </ThemeProvider>
          </HashRouter>
    </div>
  );
}

export default App;
