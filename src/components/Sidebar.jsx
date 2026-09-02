import { NavLink } from "react-router-dom";
import { LayoutDashboard ,Store,Settings ,Wallet} from "lucide-react";
import ThemeMode from "./ThemeMode";


export default function Sidebar() {
    return (
        <>
            <aside 
            className=
                "flex flex-col bg-white text-black dark:bg-slate-900 dark:text-white text-xl overflow-y-auto  font-semibold  gap-7"
        //         {`
        // fixed inset-y-0 left-0 z-40 w-64 text-black bg-white shadow-xl flex flex-col
        // transition-transform duration-300 ease-in-out overflow-y-auto items-center
        // md:relative md:translate-x-0 /* Always visible on desktop */
        // ${isOpen ? 'translate-x-0' : '-translate-x-full'} /* Slide in/out on mobile */
        //  `}
        >
                <div className="flex flex-row ml-2 gap-10  items-center">
                    <LayoutDashboard size={20}/>
                    <NavLink to='/DashBoard'>DashBoards</NavLink>
                    
                </div>

                <div className="flex flex-row ml-2 gap-10  items-center">
                    <Store size={25}/>
                    <NavLink to='/'>Markets</NavLink>
                </div>
                <div className="flex flex-row ml-2 gap-10  items-center">
                    <Wallet />
                    <NavLink to='/Wallet'>Wallet</NavLink>
                </div>
                <div className="flex flex-row ml-2 gap-10  items-center">
                    <Settings />
                    <NavLink to='/'>Settings</NavLink>
                </div>

                <div className="absolute bottom-10 left-5">
                    <ThemeMode/>
                </div>

            </aside>
        </>

    );
}