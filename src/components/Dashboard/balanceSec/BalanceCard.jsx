import Icon from "../../../assets/icon.svg"
import Button from "../../../assets/Button.svg"
import { ChevronDown } from "lucide-react"
import { useTrading } from "../../../context/TradingContext";

export default function BalanceCard() {
    const { fiatBalance } = useTrading();

    return (
        <div className="rounded-2xl bg-[#429EFF] dark:bg-slate-800 p-4 h-32 text-white transition-colors duration-200">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <img src={Icon} alt="icon" className="w-11 h-auto" />
                    <h2 className="text-lg font-medium">
                        My Balance
                    </h2>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center justify-around border w-25 h-11.5 rounded-3xl">
                        <span className="text-sm ">
                            Weekly
                        </span>
                        <ChevronDown size={20} />
                    </div>

                    <img src={Button} alt="three dot" className="w-12 h-auto flex items-center" />
                </div>

            </div>

            <div className="mt-4 flex justify-between">
                <h3 className="text-2xl font-bold">
                    ${fiatBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>

                <p className="mt-2 text-sm">
                    +$250 this week
                </p>
            </div>

        </div>
    );
}