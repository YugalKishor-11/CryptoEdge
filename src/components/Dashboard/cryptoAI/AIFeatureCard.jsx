// import { ArrowUpRight } from "lucide-react";

export default function AIFeatureCard({
    title,
    description,
    // buttonText
    Aibut
}) {
    return (
        <div className="
            rounded-xl
            border
            border-slate-200
            dark:border-slate-700/50
            p-4
            transition-colors
            duration-200
            bg-white
            dark:bg-slate-900/60
        ">

            <div className="flex items-start justify-between">

                <div>
                    {/* Added gap-2 and items-center to align the icon and text nicely */}
                    <div className="flex justify-start items-center gap-2">
                        <img src={Aibut} alt="AI" className="dark:opacity-90 transition-opacity" />
                        <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 transition-colors">
                            {title}
                        </h3>
                    </div>


                    <p className="
                        mt-2
                        text-sm
                        leading-6
                        text-slate-600
                        dark:text-slate-400
                        transition-colors
                    ">
                        {description}
                    </p>
                </div>

                {/* <ArrowUpRight size={20} className="text-slate-400 dark:text-slate-500" /> */}
            </div>

        </div>
    );
}