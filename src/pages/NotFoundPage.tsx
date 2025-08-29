import type { FC } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { paths } from "~/router/paths";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: 120, fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h5" my={2}>
        Page Not Found
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(paths.DASHBOARD)}
        >
          Go to dashboard
        </Button>
      </Box>
    </Container>
  );
};
