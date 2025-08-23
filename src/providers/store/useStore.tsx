import { useContext } from "react";
import { StoreContext } from "./StoreContext";

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("useStore has to be used within <StoreProvider>.");
  }

  return store;
};
