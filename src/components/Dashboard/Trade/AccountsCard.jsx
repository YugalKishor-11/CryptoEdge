import { Plus } from "lucide-react";
import pro from "../../../assets/Intersect.svg"

export default function AccountsCard() {
    return (
        <div className="rounded-3xl xl:h-65 2xl:h-73 bg-white p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
                <h2 className="font-bold text-base text-slate-900 mb-3">Accounts</h2>

                <div className="grid grid-cols-2 gap-3">
                    {/* Trading Account */}
                    <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-4 relative">
                        <div className="flex flex-col items-center gap-1 ">
                            <img
                                src={pro}
                                alt="Trading Avatar"
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">Trading</h3>
                                <p className="text-[11px] text-slate-400">12 Members</p>
                            </div>
                        </div>
                    </div>

                    {/* Demo Account */}
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex flex-col items-center gap-3 ">
                            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                F
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">Demo</h3>
                                <p className="text-[11px] text-slate-400">Trial Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="mt-2 flex items-center justify-center gap-2 w-full rounded-full bg-black py-3 text-xs font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer">
                <Plus size={15} /> Add Account
            </button>
        </div>
    );
}