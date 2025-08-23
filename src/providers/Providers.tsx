import type { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { StoreProvider } from "./store/StoreProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <StoreProvider>{children}</StoreProvider>
    </BrowserRouter>
  );
};
