import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeMode() {
  // 1. Initialize state by checking localStorage or OS preference
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no saved preference, check the user's system settings
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Whenever `isDark` changes, update the HTML tag and save to localStorage
  useEffect(() => {
    const root = document.documentElement; // This gets the <html> tag

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {/* 3. Swap the icon based on the current state */}
      {isDark ? (
        <>
          <div className="flex items-center">
            <Sun className="w-5 h-5" />
            <h1 className='text-xl'>Light</h1>
          </div>
        </>
      ) : (<>
        <div className="flex items-center">
          <Moon className="w-5 h-5" />
          <h1 className='text-xl'>Dark</h1>
        </div>
      </>
      )}
    </button>
  );
}