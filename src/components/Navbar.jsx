import { useState } from 'react';
import { Search, Bell, User } from 'lucide-react'

export default function Navbar() {

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the page from refreshing

        // This is where your actual search logic goes!
        if (searchTerm.trim() !== '') {
            console.log("User searched for:", searchTerm);
            // Example: fetchResults(searchTerm) or navigate(`/search?q=${searchTerm}`)
        }
    }




    return (
        <>

            <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-md"></form>


            <div className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-2xl px-4 py-2 border sm-hidden border-gray-300 bg-white text-black dark:bg-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="search">
                    <Search  />
                </button>
                <div className="notification w-20 h-7 flex justify-center items-center">
                    <Bell  />
                </div>
                <div className="user flex justify-center items-center w-10 h-10">
                    <User  />
                </div>


            </div>
        </>
    );
}