"use client";

import { useTheme } from "next-themes";

export function useIsDark() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return { isDark, resolvedTheme };
}
