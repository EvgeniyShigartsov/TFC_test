import { Link } from "react-router";
import { paths } from "~/router/paths";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Filters } from "./Filters";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)",
        mb: 2,
      }}
    >
      <Container sx={{ display: "flex" }}>
        <Toolbar sx={{ display: "flex" }}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Manage users
          </Typography>

          <Button
            component={Link}
            to={paths.DASHBOARD}
            size="small"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Dashboard
          </Button>
        </Toolbar>
        <Filters />
      </Container>
    </AppBar>
  );
};
