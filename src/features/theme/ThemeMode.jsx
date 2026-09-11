import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeMode() {
  const [isDark, setIsDark] = useState(() => {
    // 1. Check local storage or system preference on initial render
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center ml-3.5 justify-center gap-3">
      {/* Optional icon indicator */}
      <span className="text-slate-500 dark:text-slate-400">
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </span>

      {/* Switch Button */}
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={() => setIsDark((prev) => !prev)}
        className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${isDark ? "bg-blue-600" : "bg-slate-300"
          }`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${isDark ? "translate-x-5" : "translate-x-0"
            }`}
        />
      </button>
    </div>
  );
}