import { useState } from "react";
import {
    LineChart,
    PieChart,
    Radio,
    ArrowUpRight,
    ThumbsUp,
    Sparkles,
    Paperclip,
    Mic,
    LayoutGrid,
    Zap,
} from "lucide-react";
import logo from '../assets/logo.svg'
import watch from '../assets/watch.svg'
import ChatHistory from "../components/sidebar/ChatHistory";

export default function CryptoAIChat() {
    const [prompt, setPrompt] = useState("");
    const maxLength = 1500;

    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    const handleSelectChat = (chatId) => {
        console.log("Loading chat session:", chatId);
        // Fetch or switch active chat session by ID
    };

    const handleNewChat = () => {
        console.log("Starting a new chat session");
        // Reset messages/state for a fresh prompt
    };

    return (
        <main className="p-4 flex gap-5 transition-colors duration-200">
            <div className={` ${isHistoryOpen ? "w-full lg:w-3/4 blur-sm lg:blur-none" : "w-full max-w-full"} flex flex-col items-center gap-10
               bg-linear-to-b from-[#F3F7FF] via-[#F8FAFC] to-[#F1F5F9] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 rounded-2xl p-5 border border-transparent dark:border-slate-800 transition-colors duration-200`}
            >

                <div className={`flex items-center ${isHistoryOpen ? "justify-center" : "justify-between"} w-full`}>
                    <div className={`w-10 ${isHistoryOpen ? "hidden" : "block"}`}>
                    </div>
                    <div className="flex gap-2">
                        <img src={logo} alt="logo" className="w-8" />
                        <h1 className="text-2xl text-bg-linear font-bold bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                        >CryptoEdge AI</h1>
                    </div>
                    <img src={watch} alt="timeline" className={`w-10 ${isHistoryOpen ? "hidden" : "block"} cursor-pointer dark:opacity-80`}
                        onClick={() => setIsHistoryOpen((prev) => !prev)} />
                </div>

                <div className="max-w-4xl">
                    {/* Hero Headings */}
                    <div className="text-center mb-8 sm:mb-10">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight transition-colors">
                            Hello Fajar,
                        </h1>
                        <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500">
                            How can I help you today?
                        </p>
                    </div>

                    {/* Feature Suggestion Cards */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                        {/* Card 1: Spans full width on desktop */}
                        <div className="md:col-span-2 group relative flex items-start justify-between p-5 bg-white/80 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-blue-100 dark:hover:border-slate-600 transition-all cursor-pointer">

                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <LineChart className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base transition-colors">
                                            AI Market Predictor
                                        </h3>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 transition-colors">
                                            <ThumbsUp className="w-3 h-3" /> Popular
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md transition-colors">
                                        Analyze crypto market data in real-time, including trading volumes
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                        </div>

                        {/* Card 2: Left column */}
                        <div className="group relative flex items-start justify-between p-5 bg-white/80 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-blue-100 dark:hover:border-slate-600 transition-all cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full bg-purple-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <PieChart className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base transition-colors">
                                        AI Portfolio Optimizer
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors">
                                        Investment objectives to recommend optimal asset allocation settings.
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                        </div>

                        {/* Card 3: Right column */}
                        <div className="group relative flex items-start justify-between p-5 bg-white/80 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-blue-100 dark:hover:border-slate-600 transition-all cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <Radio className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base transition-colors">
                                        AI Trade Signal Generator
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 transition-colors">
                                        Provides trading alerts such as when is the best time to buy
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                        </div>
                    </div>

                </div>

                {/* Floating Input Box Container */}
                <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border-2 border-blue-400/80 dark:border-blue-500/50 shadow-[0_8px_30px_rgb(59,130,246,0.08)] dark:shadow-none p-4 flex flex-col justify-between min-h-47.5 transition-colors duration-200">
                    {/* Top text input section */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5 flex-1">
                            <Zap className="w-4 h-4 text-slate-400 dark:text-slate-500 mt-1 shrink-0" />
                            <textarea
                                value={prompt}
                                maxLength={maxLength}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Ask Cryptomind AI anything"
                                rows={3}
                                className="w-full resize-none border-none outline-none text-slate-700 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base leading-relaxed bg-transparent"
                            />
                        </div>

                        {/* AI Pill Button */}
                        <button
                            type="button"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-md shadow-blue-500/25 hover:opacity-95 transition-opacity shrink-0 cursor-pointer"
                        >
                            <span>AI</span>
                            <Sparkles className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Bottom Actions Bar */}
                    <div className="flex flex-wrap items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3 mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 transition-colors">
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                            <button
                                type="button"
                                className="flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                            >
                                <Paperclip className="w-4 h-4" />
                                <span>Attach</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                            >
                                <Mic className="w-4 h-4" />
                                <span>Voice Message</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-1.5 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                            >
                                <LayoutGrid className="w-4 h-4" />
                                <span>Browse Prompts</span>
                            </button>
                        </div>

                        {/* Counter */}
                        <div className="font-medium text-slate-400 dark:text-slate-500 text-xs sm:text-sm mt-2 sm:mt-0 transition-colors">
                            {prompt.length} / {maxLength}
                        </div>
                    </div>
                </div>

            </div>

            <div
                className={`fixed top-20 right-4 z-50 shadow-2xl
                    lg:static lg:top-auto lg:right-auto lg:z-auto lg:shadow-none
                    ${isHistoryOpen ? "block " : "hidden"}`}
            >
                <ChatHistory
                    isOpen={true}
                    onClose={() => setIsHistoryOpen(false)}
                    onSelectChat={handleSelectChat}
                    onNewChat={handleNewChat}
                />
            </div>
        </main>
    );
}