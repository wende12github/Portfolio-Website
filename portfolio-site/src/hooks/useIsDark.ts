"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function useIsDark() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Prevent SSR/client mismatch: only report dark after mount
  const isDark = mounted && resolvedTheme === "dark";

  return { isDark, resolvedTheme, mounted };
}
