import type { Breakpoint } from "../hooks/useResponsive";

const order: Breakpoint[] = ["xs", "sm", "md", "lg"];

export function isBreakpointAtLeast(
  current: Breakpoint,
  target: Breakpoint,
): boolean {
  return order.indexOf(current) >= order.indexOf(target);
}
