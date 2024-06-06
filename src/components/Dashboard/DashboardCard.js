import * as React from "react";
//mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";

const DashboardCard = ({ icon, amount, text, color }) => {
  return (
    <Card >
     {/*//sx={{ maxHeight: 100,p: 2  }} */}
    <CardContent>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1}
        >
          {/*Left Area */}
          <Box sx={{ flex: "1 0 auto" }}>
            <Typography variant="subtitle1" color={color}>
              {amount}
            </Typography>
            <Typography fontSize="0.8rem" color="text.secondary">{text}</Typography>
          </Box>
          {/*Right Area */}
          <Avatar sx={{ bgcolor: color }}>
            <Icon fontSize="small" >{icon}</Icon>
          </Avatar>
        </Stack>
        </CardContent>
         </Card>
  );
};
export default DashboardCard;
