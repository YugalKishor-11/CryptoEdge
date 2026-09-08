import { Bell, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import AI from "../../assets/navai.svg"
import logo from "../../assets/logo.svg"
import Menu from "../../assets/menu.svg"
import Logo from "../../assets/SearchLine.svg"
import NotificationDropdown from "./NotificationDropDown";


export default function Navbar({ onClick }) {
    const [search, setSearch] = useState("");
    const [showNotifications, setShowNotifications] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'My Assets', path: '/myasset' },
        { name: 'Trade', path: '/trade' },
        { name: 'Market', path: '/market' },
        { name: 'Analytic', path: '/analytic' },
    ];


    return (
        <header className="w-full p-4 pb-0 relative z-50">
            <div className="flex items-center justify-between">

                {/* Left side */}
                <div className="flex items-center xl:gap-8 lg:gap-4  ">

                    {/* Logo */}
                    <div className="flex items-center lg:gap-2 sm:gap-4 gap-2">
                        {/* <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div> */}
                        <div className="lg:hidden cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <img src={Menu} alt="menu" className="h-8" />}
                        </div>
                        <img src={logo} alt="logo" className="w-7" />

                        <h1 className="text-3xl font-bold text-slate-900 hidden md:block">
                            CryptoEdge
                        </h1>
                    </div>

                    {/* Navigation */}


                    <nav className="hidden lg:flex items-center gap-2 font-sans text-xs">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    // Using a template literal to conditionally apply classes
                                    `px-2 py-2 rounded-xl text-sm font-medium transition-colors ${isActive
                                        ? ' text-blue-600 bg-white  rounded-t-3xl z-10 font-bold' // The "Clicked" / Active State
                                        : 'text-black hover:text-blue-500 ' // The Default State
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>



                    {/* AI button */}
                    <img src={AI} alt="AI" className="h-12 hidden md:block" />
                </div>


                {/* Right side */}
                <div className="flex items-center gap-3 relative">

                    {/* Search */}
                    <img
                        src={Logo}
                        alt="Company Logo"
                        className="w-5 h-auto xl:hidden"
                        onClick={onClick}
                    // onClick={() => alert("The image was clicked!")}
                    />
                    <SearchBar
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={onClick}
                    />

                    {/* Buy & Sell */}
                    <button
                        className="
                            hidden sm:block
                            px-4
                            py-2
                            rounded-full
                            bg-[#429EFF]
                            text-white
                            text-sm
                            font-medium
                            hover:bg-blue-600
                        "
                    >
                        Buy & Sell
                    </button>


                    {/* Notification */}
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="
                            relative
                            p-2
                            rounded-full
                            hover:bg-slate-100
                        "
                    >
                        <Bell size={20} className="text-slate-700" />

                        {/* Notification badge */}
                        <span
                            className="
                                absolute
                                -top-1
                                -right-1
                                w-4
                                h-4
                                text-[10px]
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-red-500
                                text-white
                            "
                        >
                            {/* yaha pe notification ka ayega */}
                            7
                        </span>
                    </button>
                    {showNotifications && (
                        <NotificationDropdown />
                    )}


                    {/* User */}
                    <UserMenu />

                </div>

            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 mt-4 lg:hidden z-50">
                    <nav className="flex flex-col p-4 gap-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                // Close the menu when a link is clicked!
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 text-base font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
