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
import { useCallback, useMemo, useState } from "react";
import { useStore } from "~/providers/store/useStore";
import _ from "lodash";

const genderOptions: Gender[] = ["Female", "Male", "Fluid", "Other"];

export const Filters = observer(() => {
  const store = useStore();

  const [localFilters, setLocalFilters] = useState<UserFilters>({
    age: {
      min: store.filters?.age?.min ?? store.userMinMaxAge.min,
      max: store.filters?.age?.max ?? store.userMinMaxAge.max,
    },
    gender: store.filters?.gender,
    textField: store.filters?.textField,
  });

  const debouncedStoreFilterUpdate = useMemo(
    () => _.debounce(store.updateFilters, 300),
    [store]
  );

  const handleUpdateFilters = useCallback(
    (field: keyof UserFilters, value: UserFilters[keyof UserFilters]) => {
      setLocalFilters((p) => ({ ...p, [field]: value }));
      debouncedStoreFilterUpdate(field, value);
    },
    [debouncedStoreFilterUpdate]
  );

  const ageFrom = localFilters.age!.min!;
  const ageTo = localFilters.age!.max!;

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
          onChange={(_, [min, max]) => handleUpdateFilters("age", { min, max })}
          min={store.userMinMaxAge.min}
          max={store.userMinMaxAge.max}
        />
      </Box>

      <FormControl size="small" sx={{ minWidth: "200px" }}>
        <InputLabel>Gender</InputLabel>
        <Select
          label="Gender"
          defaultValue=""
          onChange={(e) => handleUpdateFilters("gender", e.target.value)}
        >
          {genderOptions.map((gender) => (
            <MenuItem value={gender} key={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        onChange={(e) => handleUpdateFilters("textField", e.target.value)}
        label="Search in card"
        type="text"
        size="small"
        sx={{ minWidth: "300px" }}
      />
    </Box>
  );
});
