import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

export default function CalculatorInput({ value, setValue }) {
  function handleChange(e) {
    const newVal = +e.target.value;
    if (Number.isInteger(newVal)) setValue(newVal);
  }

  return (
    <Input
      type="number"
      style={{ width: 120 }}
      value={value.toString()}
      onChange={handleChange}
      inputProps={{ min: 0, pattern: "[0-9]*" }}
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
    />
  );
}
