import type { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { StoreProvider } from "./store/StoreProvider";
import { CssBaseline } from "@mui/material";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <StoreProvider>{children}</StoreProvider>
    </BrowserRouter>
  );
};
