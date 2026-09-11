import Blu from "../../../assets/bluDoll.svg"
import Money from '../../../assets/money-dollar.svg'
import Right from '../../../assets/arrow-right-up.svg'
import Left from '../../../assets/arrow-left-down.svg'

export default function FastActionCard() {
    return (
        <div className="rounded-2xl bg-white dark:text-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 h-full lg:h-32 gap-4 transition-colors duration-200">

            <div className="flex flex-col lg:flex-row gap-4 lg:h-12 lg:items-center">
                <div className="flex items-center gap-1.5">
                    <img src={Blu} alt="blu" className="w-9" />
                    <h2 className="font-medium font-sans text-xl text-slate-900 dark:text-slate-100 transition-colors">
                        Fast Action
                    </h2>
                </div>

                <div className="flex justify-around items-center flex-1 lg:h-12 border border-[#50A2FF] dark:border-blue-500/70 rounded-xl dark:bg-slate-800/50 transition-colors">
                    <img src={Money} alt="money" className="w-5" />
                    <div className="flex flex-col leading-tight">
                        {/* Top text */}
                        <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                            Pay with
                        </span>
                        {/* Bottom text */}
                        <span className="text-sm font-semibold text-black dark:text-white transition-colors">
                            USD Wallet
                        </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                        $7,598.00
                    </h3>
                </div>
            </div>

            <div className="flex justify-around gap-3 mt-3">
                <button className="px-4 py-2 rounded-2xl bg-black  dark:bg-slate-400 border border-transparent dark:border-slate-700 text-white w-42 hover:opacity-90 transition-all">
                    <div className="flex items-center justify-center gap-1.5">
                        <p>Send</p>
                        <img src={Right} alt="send" />
                    </div>
                </button>

                <button className="px-4 py-2 rounded-2xl border border-blue-400 dark:border-blue-500 bg-blue-400 dark:bg-blue-500 text-white w-42 hover:opacity-90 transition-all">
                    <div className="flex items-center justify-center gap-1.5">
                        <p>Receive</p>
                        <img src={Left} alt="recieve" />
                    </div>
                </button>
            </div>

        </div>
    );
}