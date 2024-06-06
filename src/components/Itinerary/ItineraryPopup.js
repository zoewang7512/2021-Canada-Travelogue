//mui
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const CustomPopup = ({ popupColor, popupIcon, title, subheader }) => {
  return (
    <Box sx={{ maxWidth: 345, bgcolor: "#fff" }}>
      <Box sx={{ p: 1 }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {/*icon */}
          <Avatar sx={{ bgcolor: popupColor }} aria-label="recipe">
            <Icon>{popupIcon}</Icon>
          </Avatar>
          {/*text */}
          <Box>
            <Typography variant="subtitle1" component="div">
              {title}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {subheader}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default CustomPopup;
