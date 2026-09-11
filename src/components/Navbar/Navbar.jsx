import { Bell, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import AI from "../../assets/navai.svg";
import logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.svg";
import Logo from "../../assets/SearchLine.svg";
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

    const navigate = useNavigate();
    const handleAIChat = () => {
        navigate("/aichat");
    };

    return (
        <header className="w-full p-4 pb-0 relative z-50 transition-colors duration-200">
            <div className="flex items-center justify-between">

                {/* Left side */}
                <div className="flex items-center xl:gap-8 lg:gap-4">

                    {/* Logo */}
                    <div className="flex items-center lg:gap-2 sm:gap-4 gap-2">
                        <div
                            className="lg:hidden cursor-pointer text-slate-800 dark:text-slate-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <img src={Menu} alt="menu" className="h-8 dark:invert transition-all" />}
                        </div>
                        <img src={logo} alt="logo" className="w-7" />

                        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 hidden md:block transition-colors">
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
                                    `px-2 py-2 rounded-xl text-sm font-medium transition-colors ${isActive
                                        ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 rounded-t-3xl z-10 font-bold shadow-xs'
                                        : 'text-black dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* AI button */}
                    <img
                        src={AI}
                        alt="AI"
                        className="h-12 hidden md:block cursor-pointer dark:opacity-90 hover:opacity-100 transition-opacity"
                        onClick={handleAIChat}
                    />
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3 relative">

                    {/* Search Icon (Mobile / Tablet trigger) */}
                    <img
                        src={Logo}
                        alt="Company Logo"
                        className="w-5 h-auto xl:hidden cursor-pointer dark:invert transition-all"
                        onClick={onClick}
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
                            dark:hover:bg-blue-500
                            transition-colors
                            cursor-pointer
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
                            dark:hover:bg-slate-800
                            transition-colors
                            cursor-pointer
                        "
                    >
                        <Bell size={20} className="text-slate-700 dark:text-slate-300" />

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

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg dark:shadow-2xl border-t border-gray-100 dark:border-slate-800 mt-4 lg:hidden z-50 transition-colors duration-200">
                    <nav className="flex flex-col p-4 gap-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-3 text-base font-medium rounded-xl transition-colors ${isActive
                                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold'
                                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`
                                }
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