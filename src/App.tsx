import { AppRouter } from "~/router/AppRouter";
import { Header } from "~/components/Header";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
