import Blu from "../../../assets/bluDoll.svg"
import Money from '../../../assets/money-dollar.svg'
import Right from '../../../assets/arrow-right-up.svg'
import Left from '../../../assets/arrow-left-down.svg'
export default function FastActionCard() {
    return (
        <div className=" rounded-2xl bg-white border border-slate-50 p-3 h-full lg:h-32 gap-4">

            <div className="flex  flex-col lg:flex-row gap-4  lg:h-12 lg:items-center">
                <div className="flex items-center gap-1.5">
                    <img src={Blu} alt="blu" className="w-9 " />
                    <h2 className="font-medium font-sans text-xl">
                        Fast Action
                    </h2>
                </div>


                <div className="flex justify-around items-center flex-1 lg:h-12 border border-[#50A2FF] rounded-xl">

                    <img src={Money} alt="money" className="w-5" />
                    <div className="flex flex-col leading-tight">
                        {/* Top text: Small, gray, and medium weight */}
                        <span className="text-xs text-gray-500 font-medium">
                            Pay with
                        </span>

                        {/* Bottom text: Standard size, black, and bold */}
                        <span className="text-sm font-semibold text-black">
                            USD Wallet
                        </span>

                    </div>
                    <h3 className=" text-xl font-semibold ">
                        $7,598.00
                    </h3>
                </div>


            </div>

            <div className="flex justify-around gap-3 mt-3">
                <button className="px-4 py-2 rounded-2xl bg-black text-white w-42">
                    <div className="flex items-center justify-center">
                        <p>Send</p>
                        <img src={Right} alt="send" />
                    </div>

                </button>

                <button className="px-4 py-2 rounded-2xl border bg-blue-400 text-white w-42">
                    <div className="flex items-center justify-center">
                        <p>Receive</p>
                        <img src={Left} alt="recieve" />
                    </div>


                </button>
            </div>

        </div>
    );
}

