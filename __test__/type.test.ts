import { PropsWithReactNodeChildren, PropsWithFunctionChildren } from "../lib";
import { expectType } from "tsd";
import { ReactNode } from "react";
interface Props {
  id: string;
}
type ChildrenFunc = (...args: number[]) => ReactNode;

let PropsWithReactNodeChildrenValue: PropsWithReactNodeChildren<Props>;

let propsWithFunctionChildrenValue: PropsWithFunctionChildren<
  Props,
  ChildrenFunc
>;

test("Check PropsWithReactNode Util Type", () => {
  expectType<Props & { children: ReactNode }>(PropsWithReactNodeChildrenValue);
});

test("Check PropsWithFunctionChildren Util Type", () => {
  expectType<Props & { children: ChildrenFunc }>(
    propsWithFunctionChildrenValue
  );
});
