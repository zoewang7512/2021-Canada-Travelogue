  //i18n
  import {useTranslation } from "react-i18next";
  //components
import {
    AccommodationIcon,
    FoodIcon,
    TransportationIcon,
    EntertainmentIcon,
    TuitionIcon,
    ShoppingIcon,
    InsuranceIcon,
    OtherIcon
  } from "./CustomIcon";
  //mui
  import Box from "@mui/material/Box";

  
const Dot = ({ category }) => {
     //i18n
 const { t } = useTranslation();
 const {Accommodation,Food,Transportation,Tuition,Entertainment,Shopping,Insurance,Other} =t('calculator');
   //依照category分別對應不同客製化的icon圖案(顏色和圖案已經設計好)
   const statusIcon = {
    住宿費用: <AccommodationIcon />,
    飲食費用: <FoodIcon />,
    交通費用: <TransportationIcon />,
    教育費用: <TuitionIcon />,
    休閒費用: <EntertainmentIcon />,
    購物費用: <ShoppingIcon />,
    保險費用: <InsuranceIcon />,
    其他: <OtherIcon />
  };

  const statusText = {
    住宿費用: Accommodation,
    飲食費用: Food,
    交通費用: Transportation,
    教育費用: Tuition,
    休閒費用: Entertainment,
    購物費用: Shopping,
    保險費用: Insurance,
    其他: Other
  };
    return (
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        {statusIcon[category]}
        <Box p={1} sx={{ display: { sm: "none", md: "block" } }}>
        {statusText[category]}
        </Box>
      </Box>
    );
  };
  export default Dot;
  