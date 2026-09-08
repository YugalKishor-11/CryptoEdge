import { Sparkles, ArrowRight } from "lucide-react";
import AIFeatureCard from "./AIFeatureCard";
import AISearch from "./AISearch";
import Ai from "../../../assets/AI-market.svg"
import Aip from "../../../assets/AI-pred.svg"

export default function CryptoAISection() {
    return (
        <section className="
            rounded-2xl
            bg-linear-to-br
            from-blue-600
            to-purple-600
            p-4
            lg:p-6
            text-white
            h-full
            flex
            flex-col
        ">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="
                        w-10
                        h-10
                        rounded-xl
                        bg-white/20
                        flex
                        items-center
                        justify-center
                    ">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">
                            CryptoEdge AI
                        </h2>
                    </div>
                </div>

                <button className="
                    hidden
                    sm:flex
                    items-center
                    gap-1
                    text-sm
                    font-medium
                    hover:underline
                ">
                    Explore AI
                    <ArrowRight size={16} />
                </button>
            </div>


            {/* AI Feature cards */}
            <div className="
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-4
                mb-4
                text-black
            ">
                <AIFeatureCard
                    title="AI Market Predictor"
                    description="Analyze market trends and get AI-powered insights."
                    buttonText="Predict Market"
                    Aibut={Ai}
                />

                <AIFeatureCard
                    title="AI Portfolio Optimizer"
                    description="Get suggestions to improve your portfolio allocation."
                    buttonText="Optimize Portfolio"
                    Aibut={Aip}
                />
            </div>

            {/* AI Search */}
            <div className="mt-auto">
                <AISearch />
            </div>

        </section>
    );
}