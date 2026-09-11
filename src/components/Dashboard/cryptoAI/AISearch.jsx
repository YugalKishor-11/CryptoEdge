import flash from "../../../assets/flashlight-line.svg"
import AI from "../../../assets/ai.svg"

export default function AISearch() {
    return (
        <div className="flex mt-5 items-center justify-between">
            <div className="
                h-12 w-64
                flex
                items-center
                gap-3
                rounded-3xl
                bg-white
                dark:bg-slate-900/60
                dark:border
                dark:border-slate-700/50
                p-2
                transition-colors
                duration-200
            ">

                <div className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-lg
                    md:w-5
                    md:h-6
                    text-blue-600
                    dark:text-blue-400
                ">
                    {/* <Sparkles size={18} /> */}
                    <img src={flash} alt="flash" className="dark:opacity-80 transition-opacity" />
                </div>

                <input
                    type="text"
                    placeholder="Search with AI "
                    className="
                        flex-1
                        min-w-0
                        bg-transparent
                        text-sm
                        text-slate-800
                        dark:text-slate-100
                        outline-none
                        placeholder:text-slate-400
                        dark:placeholder:text-slate-500
                        transition-colors
                        duration-200
                    "
                />

                {/* <button className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-lg
                    bg-blue-600
                    text-white
                    hover:bg-blue-700
                    dark:bg-blue-500
                    dark:hover:bg-blue-600
                ">
                    <Search size={18} />
                </button> */}

            </div>
            <img src={AI} alt="AI" className="h-12 hidden md:block dark:opacity-90 transition-opacity" />
        </div>
    );
}