// src/components/Dashboard/AI/CryptoAISection.jsx
import { Bot, ArrowUpRight } from "lucide-react";
import robo from "../../../assets/Robot.svg"

export default function CryptoAISec() {
    return (
        <section className="overflow-hidden rounded-3xl  bg-linear-to-r from-blue-500 to-purple-500 dark:from-slate-800 dark:to-slate-900 p-3 text-white shadow-md transition-colors duration-200 dark:border dark:border-slate-700/50">
            <div className="flex flex-col justify-between gap-5 m-4 lg:gap-3 md:flex-row md:items-center">
                <div>
                    <div className="mb-3 flex items-center gap-2">
                        <Bot size={25} />
                        <span className="text-sm font-medium">CryptoMind AI</span>
                    </div>

                    <h2 className="text-2xl font-semibold leading-snug">
                        Trade smarter with <br /> CryptoMind AI
                    </h2>

                    <p className="mt-3 lg:mt-0 max-w-md text-sm text-white/80 dark:text-slate-300 transition-colors">
                        Automate trades based on user-defined criteria, using AI algorithms.
                    </p>

                    <div className="flex lg:mt-0 justify-between items-center pt-2.5 ">
                        <button className="xl:mt-5 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black dark:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors cursor-pointer">
                            Try Now <ArrowUpRight size={15} />
                        </button>
                        <div className="md:hidden lg:block xl:hidden items-center justify-center select-none">
                            <img src={robo} alt="Robot" className="h-10" />
                        </div>
                    </div>

                </div>

                <div className="hidden md:block lg:hidden xl:block items-center justify-center text-5xl xl:text-7xl select-none">
                    {/* 🤖 */}
                    <img src={robo} alt="Robot" />
                </div>
            </div>
        </section>
    );
}