import { useState, type FC, type PropsWithChildren } from "react";
import { StoreContext } from "./StoreContext";
import { Store } from "./store";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store] = useState(() => new Store());

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
