import {
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Slider,
} from "@mui/material";
import { useState } from "react";

export const Filters = () => {
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 50]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box sx={{ minWidth: "250px" }}>
        <Typography variant="subtitle1" color="textPrimary">
          Age from {ageRange[0]} to {ageRange[1]}
        </Typography>
        <Slider
          value={ageRange}
          onChange={(_, [min, max]) => setAgeRange([min, max])}
          min={18}
          max={50}
        />
      </Box>

      <FormControl size="small" sx={{ minWidth: "200px" }}>
        <InputLabel>Sex</InputLabel>
        <Select label="Стать" defaultValue="">
          <MenuItem value="male">Чоловіча</MenuItem>
          <MenuItem value="female">Жіноча</MenuItem>
          <MenuItem value="other">Інша</MenuItem>
        </Select>
      </FormControl>

      <TextField
        onChange={(e) => console.log(e.target.value)}
        label="Search in card"
        type="text"
        size="small"
        sx={{ minWidth: "300px" }}
      />
    </Box>
  );
};
