import { useState } from "react";
import { History, X } from "lucide-react";

const HISTORY_ITEMS = [
  {
    id: "1",
    title: "Unlock Your Past, Shape Yo...",
    description: "Revisit your AI chat history to track ins...",
  },
  {
    id: "2",
    title: "Your Crypto Journey, Reco...",
    description: "Every question, every answer—your AI...",
  },
  {
    id: "3",
    title: "Learn from Your Data",
    description: "Access your past AI conversations to...",
  },
  {
    id: "4",
    title: "Never Miss a Detail",
    description: "Review past AI interactions to catch in...",
  },
  {
    id: "5",
    title: "AI Wisdom, On-Demand",
    description: "Your history with Cryptomind's AI is yo...",
  },
  {
    id: "6",
    title: "Unlock Your Past, Shape Yo...",
    description: "Revisit your AI chat history to track ins...",
  },
  {
    id: "7",
    title: "Your Bitcoin Journey, Recor...",
    description: "Every question, every answer—your AI...",
  },
];

export default function ChatHistory({
  isOpen = true,
  onClose,
  onSelectChat,
  onNewChat,
}) {
  const [selectedId, setSelectedId] = useState("1");

  if (!isOpen) return null;

  return (
    <aside className="w-full md:w-80 h-[83vh] md:h-[88vh] lg:h-full bg-[#F7F9FD] dark:bg-slate-900 rounded-3xl p-5 flex flex-col justify-between shadow-xl border border-slate-200/70 dark:border-slate-800 antialiased transition-colors duration-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-sm">
            <History className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors">
            History
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close history"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* History Items List */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 my-2">
        {HISTORY_ITEMS.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => {
                setSelectedId(item.id);
                if (onSelectChat) onSelectChat(item.id);
              }}
              className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${isSelected
                  ? "bg-[#EBF2FE] dark:bg-blue-950/40 border-blue-400 dark:border-blue-500/50 shadow-sm"
                  : "bg-white/70 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 mt-1 truncate transition-colors">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* New Chat Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={onNewChat}
          className="w-full py-3.5 px-4 rounded-2xl bg-blue-500 hover:bg-blue-600 active:scale-[0.99] text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center cursor-pointer"
        >
          New Chat
        </button>
      </div>
    </aside>
  );
}