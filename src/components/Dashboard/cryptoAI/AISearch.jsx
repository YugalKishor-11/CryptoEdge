// import { Search ,Sparkles} from "lucide-react";
import flash from "../../../assets/flashlight-line.svg"
import AI from "../../../assets/ai.svg"
export default function AISearch() {
    return (
        <><div className="flex mt-5 items-center justify-between">
            <div className="
            h-12 w-64
            flex
            items-center
            gap-3
            rounded-3xl
            bg-white
            p-2
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
            ">
                    {/* <Sparkles size={18} /> */}
                    <img src={flash} alt="flash" />
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
                    outline-none
                    placeholder:text-slate-400
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
            ">
                <Search size={18} />
            </button> */}

            </div>
            <img src={AI} alt="AI" className="h-12 hidden md:block" />
        </div>

        </>

    );
}

