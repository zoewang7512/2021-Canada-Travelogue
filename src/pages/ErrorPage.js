import { Link } from "react-router-dom";
//i18n
import {useTranslation } from "react-i18next";
//components
import Lottie404 from "../components/ErrorPage/Lottie404";
//mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";


export default function ErrorPage() {

  const { t } = useTranslation();
  const {ErrorPageLine1,ErrorPageLine2,ErrorPageLine3,ErrorPageLine4,ErrorPageLine5} =t('errorPage');

    return (
        <Box
          minHeight="80vh"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          bgcolor={"background.default"} p={2} color={"text.primary"}>
          <CssBaseline />
          <Grid container spacing={2}justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Lottie404/>
            </Grid>
            <Grid item xs={12} md={6} container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="h3">{ErrorPageLine1}</Typography>
                <Typography variant="h6" gutterBottom>{ErrorPageLine2}</Typography>
                <Typography variant="body2" gutterBottom>{ErrorPageLine3} <br/> {ErrorPageLine4}</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained"> <Link to='/'>{ErrorPageLine5}</Link></Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
    )
}