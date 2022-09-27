import { ReactNode } from "react";

export type PropsWithReactNodeChildren<P = unknown> = P & {
  children: ReactNode;
};

export type PropsWithFunctionChildren<P = unknown> = P & {
  children: (args: any) => any;
};
