// src/components/Dashboard/Spending/SpendingOverviewCard.jsx
import { CreditCard, MoreHorizontal } from "lucide-react";

export default function SpendingOverviewCard() {
    return (
        <div className="md:w-1/2 lg:w-full lg:h-auto rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-200">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <CreditCard size={15} />
                    </div>
                    <h2 className="font-medium text-slate-900 dark:text-slate-100 transition-colors">
                        Spending Overview
                    </h2>
                </div>
                <button className="rounded-full border border-gray-300 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <MoreHorizontal size={15} />
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                    $87,230
                </h2>
                <p className="text-sm text-gray-500 dark:text-slate-400 transition-colors">
                    <span className="text-red-500 dark:text-red-400">+$50</span> this week
                </p>
            </div>

            {/* Gauge Chart */}
            <div className="relative mx-auto mt-4 h-17.5 w-37.5">
                {/* Background Track */}
                <div className="absolute inset-0 rounded-t-full border-18 border-gray-200 dark:border-slate-700/50 border-b-0 transition-colors duration-200" />
                {/* Foreground Track */}
                <div className="absolute inset-0 rounded-t-full border-18 border-blue-500 border-b-0" />

                {/* <div className="absolute left-[15px] top-[12px] right-[15px] rounded-t-full border-[14px] border-purple-400 border-b-0" />
                <div className="absolute left-[30px] top-[24px] right-[30px] rounded-t-full border-[10px] border-yellow-400 border-b-0" /> */}
            </div>

            {/* Legend */}
            <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-300 transition-colors">
                    <span className="flex gap-2 items-center">
                        <span className="h-3 w-3 rounded-full bg-blue-500" /> Withdrawal
                    </span>
                    <span>$50</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300 transition-colors">
                    <span className="flex gap-2 items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-400" /> Subscription
                    </span>
                    <span>$30</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300 transition-colors">
                    <span className="flex gap-2 items-center">
                        <span className="h-3 w-3 rounded-full bg-yellow-400" /> Other
                    </span>
                    <span>$10</span>
                </div>
            </div>

        </div>
    );
}