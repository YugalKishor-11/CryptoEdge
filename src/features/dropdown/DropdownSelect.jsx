import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function DropdownSelect({ options, selected, onChange, Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex justify-between items-center px-3.5 h-11 xl:h-12 bg-white dark:bg-slate-800/60 border rounded-xl cursor-pointer transition-colors duration-200 ${isOpen
            ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-100 dark:ring-blue-950/50"
            : "border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600"
          }`}
      >
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 text-sm xl:text-base transition-colors duration-200">
          <Icon size={18} className="text-slate-500 dark:text-slate-400 transition-colors duration-200" />
          <span>{selected.label}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-slate-400 dark:text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-black/50 p-1.5 z-50 flex flex-col gap-0.5 max-h-56 overflow-y-auto transition-colors duration-200">
          {options.map((option) => {
            const isSelected = option.value === selected.value;
            return (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm xl:text-base cursor-pointer transition-colors duration-200 ${isSelected
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
              >
                <span>{option.label}</span>
                {isSelected && <Check size={16} className="text-blue-600 dark:text-blue-400" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}