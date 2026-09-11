import { useState } from "react";
import { MessageSquare, Zap, Bell, HelpCircle } from "lucide-react";

const INITIAL_SETTINGS = [
  {
    id: "tailor_experience",
    icon: MessageSquare,
    title: "Tailor Your AI Experience",
    description:
      "Adjust preferences for signals, risk levels, and insights to get the most relevant recommendations.",
    enabled: true,
  },
  {
    id: "trading_goals",
    icon: Zap,
    title: "Set Your Trading Goals",
    description:
      "Let Cryptomind AI optimize strategies tailored to your ambitions",
    enabled: true,
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Control the Notifications You Get",
    description:
      "From price movements to trade signals, stay updated without the noise.",
    enabled: true,
  },
  {
    id: "preferred_assets",
    icon: HelpCircle,
    title: "Choose Your Preferred Assets",
    description:
      "Cryptomind AI will prioritize insights and signals for your selected coins or tokens.",
    enabled: false,
  },
  {
    id: "risk_sensitivity",
    icon: Zap,
    title: "Adjust Risk Sensitivity",
    description:
      "Fine-tune your risk tolerance. Whether you're cautious or aggressive, Cryptomind AI adapts to your comfort zone",
    enabled: false,
  },
];

export default function AISetting() {
  const [toggleStates, setToggleStates] = useState(
    INITIAL_SETTINGS.reduce((acc, item) => {
      acc[item.id] = item.enabled;
      return acc;
    }, {})
  );

  const handleToggle = (id) => {
    setToggleStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 font-sans">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 flex items-center gap-2 transition-colors duration-200">
          Customize Your AI, Optimize Your Support 🚀
        </h2>
      </div>

      {/* Settings List */}
      <div className="flex flex-col gap-3 sm:gap-3.5">
        {INITIAL_SETTINGS.map((item) => {
          const IconComponent = item.icon;
          const isChecked = toggleStates[item.id];

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 md:px-5 md:py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-sm hover:border-slate-200/80 dark:hover:border-slate-700 transition-all duration-200"
            >
              {/* Left Side: Icon & Copy */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-300 transition-colors duration-200">
                  <IconComponent className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-xs sm:text-sm md:text-[15px] font-semibold text-slate-800 dark:text-slate-100 leading-snug transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-400 mt-0.5 leading-relaxed truncate sm:whitespace-normal transition-colors duration-200">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={isChecked}
                onClick={() => handleToggle(item.id)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isChecked
                    ? "bg-blue-500"
                    : "bg-slate-200 dark:bg-slate-700"
                  }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${isChecked ? "translate-x-5" : "translate-x-0"
                    }`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer text */}
      <p className="mt-4 text-xs sm:text-sm text-slate-400 dark:text-slate-500 transition-colors duration-200">
        Customize Cryptomind AI to match your trading style
      </p>
    </div>
  );
}