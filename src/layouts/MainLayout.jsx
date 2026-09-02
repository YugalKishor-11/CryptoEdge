import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


export default function MainLayout() {
    return (
        <div className="h-screen w-full flex flex-col bg-white text-black dark:bg-slate-900 dark:text-white overflow-hidden ">
            <header className="shrink-0 p-4  border-slate-200 dark:border-slate-800 flex justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-blue-600 ">CryptoEdge</h1>
                
                <Navbar />
            </header>

            <div className="flex flex-1 overflow-hidden min-h-[calc(100vh-73px)]">
                <aside className="w-64 shrink-0  border-r border-slate-200 dark:border-slate-800 mt-24">
                    <Sidebar />
                </aside>


                <main className="flex-1 min-w-0 p-4 overflow-y-auto dark:overflow-y-bg-gray-700">
                     <div className="mx-auto max-w-7xl">
                        <Outlet />
                    {/* The current route's page component will render here */}
                    <h1 className='text-3xl '>hello world</h1>

                    </div>
                </main>
            </div>
        </div>
    );
}