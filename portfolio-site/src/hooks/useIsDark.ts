"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useIsDark() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevent SSR/client mismatch: only report dark after mount
  const isDark = mounted && resolvedTheme === "dark";

  return { isDark, resolvedTheme, mounted };
}
