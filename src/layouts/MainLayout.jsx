import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import SearchModal from '../features/search/SearchModal';

export default function MainLayout() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
            <div className="h-screen w-full flex flex-col  bg-linear-to-br from-[#cee4fa] to-[#E8E6FB] text-black dark:bg-slate-900 dark:text-white overflow-hidden ">
                <header className="shrink-0 p-4 pb-2 border-slate-200 dark:border-slate-800 flex justify-between">

                    <Navbar onClick={() => setShowSearch(true)} />
                </header>

                <main className="flex flex-1 flex-col overflow-auto [&::-webkit-scrollbar]:hidden pl-4 pr-4  pb-4 ">
                    {/* The current route's page component will render here */}
                    <Outlet />
                </main>

                <footer></footer>
            </div>
            {showSearch && (
                <SearchModal
                    onClose={() => setShowSearch(false)}
                />
            )
            }

        </>
    );
}