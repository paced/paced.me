import { useState } from "react";
import { BsDisplay, BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark" | "system";

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  } catch {
    // Ignore.
  }

  return "system";
}

function applyTheme(theme: Theme) {
  try {
    const root = document.documentElement;

    root.classList.add("theme-transitioning");
    root.addEventListener("transitionend", () => root.classList.remove("theme-transitioning"), { once: true });

    if (theme === "system") {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = prefersDark ? "dark" : "light";
    } else {
      localStorage.setItem("theme", theme);
      root.dataset.theme = theme;
    }
  } catch {
    // Ignore.
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (typeof window !== "undefined" ? getStoredTheme() : "system"));

  function select(newTheme: Theme) {
    setTheme(newTheme);
    applyTheme(newTheme);
  }

  return (
    <div className="theme-toggle">
      <div className="theme-toggle-icons">
        <button
          className={`theme-toggle-btn${theme === "light" ? " active" : ""}`}
          onClick={() => select("light")}
          aria-label="Light theme"
          title="Light"
        >
          <BsSun />
        </button>
        <button
          className={`theme-toggle-btn${theme === "dark" ? " active" : ""}`}
          onClick={() => select("dark")}
          aria-label="Dark theme"
          title="Dark"
        >
          <BsMoon />
        </button>
        <button
          className={`theme-toggle-btn${theme === "system" ? " active" : ""}`}
          onClick={() => select("system")}
          aria-label="System theme"
          title="System"
        >
          <BsDisplay />
        </button>
      </div>
      <a
        className="theme-toggle-attribution"
        href="https://github.com/morhetz/gruvbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        gruvbox by morhetz
      </a>
    </div>
  );
}
