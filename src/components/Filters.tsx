import {
  Typography,
  Box,
  TextField,
  Slider,
  Autocomplete,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo, useState } from "react";
import { useStore } from "~/providers/store/useStore";
import _ from "lodash";
import ClearIcon from "@mui/icons-material/Clear";

const genderOptions: Gender[] = ["Female", "Male", "Fluid", "Other"];

export const Filters = observer(() => {
  const store = useStore();

  const [localFilters, setLocalFilters] = useState<UserFilters>({
    age: {
      min: store.filters?.age?.min ?? store.userMinMaxAge.min,
      max: store.filters?.age?.max ?? store.userMinMaxAge.max,
    },
    genders: store.filters?.genders,
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
      <Box sx={{ minWidth: "170px" }}>
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

      <Autocomplete
        size="small"
        options={genderOptions}
        renderInput={(params) => <TextField {...params} label="Gender" />}
        onChange={(_, genders) => handleUpdateFilters("genders", genders)}
        sx={{ minWidth: "300px" }}
        multiple
      />

      <TextField
        onChange={(e) => handleUpdateFilters("textField", e.target.value)}
        value={localFilters.textField ?? ""}
        label="Search in card"
        type="text"
        size="small"
        sx={{ minWidth: "300px" }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {localFilters.textField && (
                  <IconButton
                    onClick={() => handleUpdateFilters("textField", "")}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
});
