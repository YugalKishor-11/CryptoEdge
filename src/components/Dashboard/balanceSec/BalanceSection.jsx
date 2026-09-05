import BalanceCard from "./BalanceCard";
import FastActionCard from "./FastActionCard";

export default function BalanceSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            
            <BalanceCard />

            <FastActionCard />

        </section>
    );
}

