// src/components/Dashboard/Balance/MyBalanceCard.jsx
import { Wallet, ChevronDown, MoreHorizontal, ArrowLeftRight } from "lucide-react";

export default function MyBalanceCard() {
    return (
        <div className="relative h-64 md:h-auto md:w-1/2 lg:w-full lg:h-auto overflow-hidden rounded-3xl bg-blue-400 p-5 text-white shadow-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <Wallet size={16} />
                    </div>
                    <h2 className="font-medium">My Balance</h2>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 rounded-full border border-white/40 px-3 py-1 text-xs">
                        Weekly <ChevronDown size={13} />
                    </button>
                    <button className="rounded-full border border-white/40 p-2">
                        <MoreHorizontal size={15} />
                    </button>
                </div>
            </div>

            <div className="mt-6 flex justify-between">
                <h2 className="text-3xl font-semibold">$120,980</h2>
                <p className="mt-2 text-sm text-white/80">
                    <span className="text-white">+$250</span> this week
                </p>
            </div>

            <div className="absolute bottom-16 left-5 right-5 h-17.5">
                <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                    <path
                        d="M0 80 L30 80 L70 40 L120 40 L160 60 L200 30 L250 30 L290 15 L330 15 L370 0 L400 0"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <button className="absolute bottom-4 left-5 right-5 flex items-center justify-center gap-2 rounded-full bg-black py-2.5 text-sm text-white">
                <ArrowLeftRight size={15} />
                Exchange
            </button>
        </div>
    );
}