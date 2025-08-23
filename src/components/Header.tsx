import { Link, generatePath } from "react-router";
import { paths } from "~/router/paths";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box component="header">
      <Box component="h2">User management</Box>
      <Box component="nav">
        <Link to={paths.DASHBOARD}>Dashboard</Link>
        <Link
          to={generatePath(paths.USER, {
            id: Math.floor(Math.random() * 100 + 1),
          })}
        >
          Go to random user
        </Link>
      </Box>
    </Box>
  );
};
