import React,{useState} from "react";
//i18n
import { useTranslation } from "react-i18next";
//mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LanguageIcon from '@mui/icons-material/Language';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const LanguageSelector = () => {

    const [lng, setLng] = useState('');

    const handleChange = (event) => {
      setLng(event.target.value);
    };
  
    const {i18n} =useTranslation();
     const changeLng = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <Box >
      <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
          <InputLabel id="demo-simple-select-label">
            <Stack direction="row" spacing={2}>
                <LanguageIcon/><p>Language</p>
            </Stack>
          </InputLabel>
          <Select
            value={lng}
            onChange={handleChange}
            autoWidth
          >
            <MenuItem value={10} onClick={() => changeLng("zh")}>繁體中文</MenuItem>
            <MenuItem value={20} onClick={() => changeLng("en")}>Englich</MenuItem>
          </Select>
      </FormControl>
  </Box>
  );
};

export default LanguageSelector