import type { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
