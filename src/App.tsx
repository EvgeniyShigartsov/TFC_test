import { AppRouter } from "~/router/AppRouter";
import { Header } from "~/components/Header";
import { useStore } from "./providers/store/useStore";
import { useEffect } from "react";
import { api } from "./api/api";
import { Box } from "@mui/material";

const App = () => {
  const store = useStore();

  useEffect(() => {
    api.getUsers().then((users) => store.setUsers(users));
  }, [store]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <AppRouter />
    </Box>
  );
};

export default App;
