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
            p-4
            transition
            bg-white
        ">

            <div className="flex items-start justify-between">

                <div>
                    <div className="flex justify-start">
                        <img src={Aibut} alt="AI" />
                        <h3 className="text-lg font-medium">
                            {title}
                        </h3>
                    </div>


                    <p className="
                        mt-2
                        text-sm
                        leading-6
                        text-slate-600
                       
                    ">
                        {description}
                    </p>
                </div>

                {/* <ArrowUpRight size={20} /> */}
            </div>

        </div>
    );
}

