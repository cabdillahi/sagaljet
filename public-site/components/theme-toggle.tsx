"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full hover:bg-blue-500/10 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-blue-500 " />
      ) : (
        <Moon className="h-5 w-5 text-blue-500  " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
