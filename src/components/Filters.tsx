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
import { observer } from "mobx-react-lite";
import { useStore } from "~/providers/store/useStore";

const genderOptions: Gender[] = ["Female", "Male", "Fluid", "Other"];

export const Filters = observer(() => {
  const store = useStore();

  const ageFrom = store.filters?.age?.min ?? store.userMinMaxAge.min;
  const ageTo = store.filters?.age?.max ?? store.userMinMaxAge.max;

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
          Age from {ageFrom} to {ageTo}
        </Typography>
        <Slider
          value={[ageFrom, ageTo]}
          onChange={(_, [min, max]) => store.updateFilters("age", { min, max })}
          min={store.userMinMaxAge.min}
          max={store.userMinMaxAge.max}
        />
      </Box>

      <FormControl size="small" sx={{ minWidth: "200px" }}>
        <InputLabel>Gender</InputLabel>
        <Select
          label="Gender"
          defaultValue=""
          onChange={(e) => store.updateFilters("gender", e.target.value)}
        >
          {genderOptions.map((gender) => (
            <MenuItem value={gender} key={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        onChange={(e) => store.updateFilters("textField", e.target.value)}
        label="Search in card"
        type="text"
        size="small"
        sx={{ minWidth: "300px" }}
      />
    </Box>
  );
});
