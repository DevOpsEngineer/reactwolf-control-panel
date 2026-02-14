"use client";

import { Bell, RefreshCw, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">ReactWolf Control Panel</h1>
        <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
          All Systems Operational
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-muted transition-colors" title="Refresh">
          <RefreshCw className="h-4 w-4 text-muted-foreground" />
        </button>
        <button className="p-2 rounded-lg hover:bg-muted transition-colors relative" title="Notifications">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive" />
        </button>
        <button
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          title="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}
