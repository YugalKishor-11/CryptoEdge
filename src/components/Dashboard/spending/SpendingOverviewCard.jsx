// src/components/Dashboard/Spending/SpendingOverviewCard.jsx
import { CreditCard, MoreHorizontal } from "lucide-react";

export default function SpendingOverviewCard() {
    return (
        <div className="md:w-1/2 lg:w-full lg:h-auto rounded-3xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <CreditCard size={15} />
                    </div>
                    <h2 className="font-medium text-slate-900">Spending Overview</h2>
                </div>
                <button className="rounded-full border border-gray-300 p-2">
                    <MoreHorizontal size={15} />
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <h2 className="text-3xl font-semibold text-slate-900">$87,230</h2>
                <p className="text-sm text-gray-500">
                    <span className="text-red-500">+$50</span> this week
                </p>
            </div>

            <div className="relative mx-auto mt-4 h-17.5 w-37.5">
                <div className="absolute inset-0 rounded-t-full border-18 border-gray-200 border-b-0" />
                <div className="absolute inset-0 rounded-t-full border-18 border-blue-500 border-b-0" />
                {/* <div className="absolute left-[15px] top-[12px] right-[15px] rounded-t-full border-[14px] border-purple-400 border-b-0" />
                <div className="absolute left-[30px] top-[24px] right-[30px] rounded-t-full border-[10px] border-yellow-400 border-b-0" /> */}
            </div>

            <div className="mt-2 space-y-1 text-xs">
                <div className="flex justify-between text-slate-600">
                    <span className="flex gap-2 items-center">
                        <span className="h-3 w-3 rounded-full bg-blue-500" /> Withdrawal
                    </span>
                    <span>$50</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span className="flex gap-2 items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-400" /> Subscription
                    </span>
                    <span>$30</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span className="flex gap-2 items-center">
                        <span className="h-3 w-3 rounded-full bg-yellow-400" /> Other
                    </span>
                    <span>$10</span>
                </div>
            </div>
        </div>
    );
}