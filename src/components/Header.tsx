import type { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import { paths } from "~/router/paths";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Filters } from "./Filters";
import { useParams } from "react-router";

export const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const userId = Number(params.id);

  const showFilters = location.pathname === paths.DASHBOARD;

  const handleDashboardClick = () => {
    navigate(paths.DASHBOARD, { state: { userId } });
  };

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
            onClick={handleDashboardClick}
            size="small"
            variant="contained"
            sx={{ ml: 2 }}
          >
            Dashboard
          </Button>
        </Toolbar>
        {showFilters && <Filters />}
      </Container>
    </AppBar>
  );
};
