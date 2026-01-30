import { useState, useEffect } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg";

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
};

function getBreakpoint(width: number): Breakpoint {
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
}

export interface UseResponsiveReturn {
  breakpoint: Breakpoint;
  width: number;
  isXsUp: boolean;
  isSmUp: boolean;
  isMdUp: boolean;
  isLgUp: boolean;
  isXsDown: boolean;
  isSmDown: boolean;
  isMdDown: boolean;
  isLgDown: boolean;
  isXsOnly: boolean;
  isSmOnly: boolean;
  isMdOnly: boolean;
  isLgOnly: boolean;
}

export function useResponsive(): UseResponsiveReturn {
  const [width, setWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  const breakpoint = getBreakpoint(width);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    breakpoint,
    width,
    isXsUp: width >= breakpoints.xs,
    isSmUp: width >= breakpoints.sm,
    isMdUp: width >= breakpoints.md,
    isLgUp: width >= breakpoints.lg,
    isXsDown: width < breakpoints.sm,
    isSmDown: width < breakpoints.md,
    isMdDown: width < breakpoints.lg,
    isLgDown: true,
    isXsOnly: width >= breakpoints.xs && width < breakpoints.sm,
    isSmOnly: width >= breakpoints.sm && width < breakpoints.md,
    isMdOnly: width >= breakpoints.md && width < breakpoints.lg,
    isLgOnly: width >= breakpoints.lg,
  };
}
