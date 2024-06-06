import dayjs from "dayjs";
//mui
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const DashboardDate = ({ startday, setStartday, endday, setEndday }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <DatePicker
          label="Start-Date"
          sx={{ bgcolor: "background.paper" }}
          value={startday}
          onChange={setStartday}
          minDate={dayjs("2021-11-01")}
          maxDate={dayjs("2022-03-30")}
  />

        <Typography variant="h5">-</Typography>
        <DatePicker
          label="End-Date"
          sx={{ bgcolor: "background.paper" }}
          value={endday}
          onChange={setEndday}
          minDate={dayjs("2021-11-02")}
          maxDate={dayjs("2022-03-31")}
        />
      </Stack>
    </LocalizationProvider>
  );
};
export default DashboardDate;
