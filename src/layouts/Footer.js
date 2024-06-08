import {useTranslation } from "react-i18next";
//components
import LanguageSelector from "./LanguageSelector";
//mui
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


const Footer = () => {
  const { t } = useTranslation();
  const {FooterText} =t('footer');

  return (
    <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent="space-around" alignItems="center">
    <LanguageSelector/>
    <Typography></Typography>
      <Typography color="text.secondary" align="center" sx={{ pt: 2, pb: 2 }}>
     {FooterText}
   </Typography>
   </Stack>
    );
};
export default Footer;
