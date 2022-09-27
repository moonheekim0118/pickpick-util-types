import { ReactNode } from "react";

type ChildFunction = (...args: any) => ReactNode;

export type PropsWithReactNodeChildren<P = unknown> = P & {
  children: ReactNode;
};

export type PropsWithFunctionChildren<
  P = unknown,
  F extends ChildFunction = (...args: any) => ReactNode
> = P & {
  children: F;
};
