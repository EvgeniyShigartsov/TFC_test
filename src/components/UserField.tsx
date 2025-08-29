import { Box, Typography, type SxProps } from "@mui/material";
import type { FC, ReactNode } from "react";

type Props = {
  label: string;
  value: ReactNode;
  highlighted?: boolean;
};

const highlightedSx: SxProps = {
  minWidth: 80,
  textAlign: "center",
  borderRadius: 2,
  boxShadow: 1,
  backgroundColor: "primary.light",
  color: "primary.contrastText",
};

export const UserField: FC<Props> = ({ label, value, highlighted }) => (
  <Box sx={highlighted ? highlightedSx : undefined}>
    <Typography variant="subtitle2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
);
