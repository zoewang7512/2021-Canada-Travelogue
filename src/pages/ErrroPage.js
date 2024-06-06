import { Link } from "react-router-dom";
import Lottie404 from "../components/Lottie404";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";


export default function ErrorPage() {
    return (
        <Box  minHeight="75vh"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
         bgcolor={"background.default"} p={2} color={"text.primary"}>
          <CssBaseline />
         <Grid container spacing={2}justifyContent="center"
  alignItems="center">
  <Grid item xs={12} md={6}>
    <Lottie404/>
  </Grid>
  <Grid item xs={12} md={6} container direction="column" spacing={2}>
  <Grid item>
  <Typography gutterBottom variant="h3" >
  Oops!
              </Typography>
              <Typography variant="h6" gutterBottom>
              Looks like something's missing.
              </Typography>
                <Typography variant="body2" gutterBottom>
             You may have mistype the address or<br/> the page may have moved.
              </Typography>
  
  </Grid>
   <Grid item>
            <Button variant="contained"> <Link to='/'>Go to Home Page.</Link></Button>
            </Grid>
  </Grid>
  </Grid>
        
         </Box>
    )
}