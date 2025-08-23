import { AppRouter } from "~/router/AppRouter";
import { Header } from "~/components/Header";
import { useStore } from "./providers/store/useStore";
import { useEffect } from "react";
import { api } from "./api/api";

const App = () => {
  const store = useStore();

  useEffect(() => {
    api.getUsers().then((users) => store.setUsers(users));
  }, [store]);

  console.log("render app");

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
