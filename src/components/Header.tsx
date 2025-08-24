import { Link } from "react-router";
import { paths } from "~/router/paths";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ display: "flex" }}>
          <Typography variant="h6" component="h6">
            User management
          </Typography>

          <Button
            component={Link}
            to={paths.DASHBOARD}
            size="small"
            variant="contained"
            sx={{ backgroundColor: "white", color: "black", ml: 2 }}
          >
            Dashboard
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
