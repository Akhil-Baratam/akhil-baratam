"use client";

import { useEffect, useState } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";

type Theme = "light" | "dark";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "light" || stored === "dark" ? stored : systemTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  // Renders a reserved, empty box until the theme is known, so the nav never
  // shifts and the wrong icon never flashes.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? `Switch to ${theme === "light" ? "dark" : "light"} theme` : "Switch theme"}
      className="grid h-9 w-9 place-items-center rounded-[var(--radius)] border border-line text-fg-2 transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "light" ? (
        <MoonStars size={17} weight="regular" />
      ) : theme === "dark" ? (
        <Sun size={17} weight="regular" />
      ) : null}
    </button>
  );
}
