import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import SearchModal from '../features/search/SearchModal';

export default function MainLayout() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
            <div className="h-screen w-full flex flex-col bg-linear-to-br from-[#cee4fa] to-[#E8E6FB] text-black dark:from-slate-950 dark:to-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-200">
                <header className="shrink-0 md:p-4 pb-2 border-slate-200 dark:border-slate-800 flex justify-between transition-colors duration-200">
                    <Navbar onClick={() => setShowSearch(true)} />
                </header>

                <main className="flex flex-1 flex-col overflow-auto [&::-webkit-scrollbar]:hidden md:pl-4 md:pr-4 pb-4">
                    {/* The current route's page component will render here */}
                    <Outlet />
                </main>

                <footer></footer>
            </div>
            {showSearch && (
                <SearchModal
                    onClose={() => setShowSearch(false)}
                />
            )}
        </>
    );
}