// src/components/Dashboard/Markets/Pagination.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, setPage, perPage, setPerPage, totalItems = 180 }) {
    const totalPages = Math.ceil(totalItems / perPage);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 py-3 px-2 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-200">

            {/* Left side: Page navigation pills */}
            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                    <ChevronLeft size={16} />
                </button>

                {/* Page 1 */}
                <button
                    onClick={() => setPage(1)}
                    className={`h-10 w-10 rounded-full font-medium transition-colors cursor-pointer ${page === 1
                            ? "bg-blue-500 text-white shadow-sm"
                            : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                >
                    1
                </button>

                {/* Page 2 */}
                {totalPages >= 2 && (
                    <button
                        onClick={() => setPage(2)}
                        className={`h-10 w-10 rounded-full font-medium transition-colors cursor-pointer ${page === 2
                                ? "bg-blue-500 text-white shadow-sm"
                                : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                    >
                        2
                    </button>
                )}

                {/* Ellipsis if far along */}
                {page > 4 && <span className="px-1 text-slate-400 dark:text-slate-500">..</span>}

                {/* Dynamic Middle/Current state if needed, or static indicator matching design */}
                {page > 2 && page < totalPages - 1 && (
                    <button className="h-10 w-10 rounded-full bg-blue-500 text-white font-medium shadow-sm">
                        {page}
                    </button>
                )}

                <span className="px-1 text-slate-400 dark:text-slate-500">..</span>

                {/* Second to Last Page */}
                {totalPages >= 10 && (
                    <button
                        onClick={() => setPage(totalPages - 1)}
                        className={`h-10 w-10 rounded-full font-medium transition-colors cursor-pointer ${page === totalPages - 1
                                ? "bg-blue-500 text-white shadow-sm"
                                : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                    >
                        {totalPages - 1}
                    </button>
                )}

                {/* Last Page */}
                {totalPages >= 10 && (
                    <button
                        onClick={() => setPage(totalPages)}
                        className={`h-10 w-10 rounded-full font-medium transition-colors cursor-pointer ${page === totalPages
                                ? "bg-blue-500 text-white shadow-sm"
                                : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                    >
                        {totalPages}
                    </button>
                )}

                {/* Next Button */}
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Right side: Items per page selector & Total count */}
            <div className="flex items-center gap-3">
                <span className="text-slate-500 dark:text-slate-400 font-medium transition-colors">Show</span>
                <select
                    value={perPage}
                    onChange={(e) => {
                        setPerPage(Number(e.target.value));
                        setPage(1); // Reset to page 1 on limit change
                    }}
                    className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-xs cursor-pointer transition-colors"
                >
                    <option value={10} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">10</option>
                    <option value={20} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">20</option>
                    <option value={50} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">50</option>
                </select>
                <span className="text-slate-500 dark:text-slate-400 font-medium transition-colors">
                    from <strong className="text-slate-800 dark:text-slate-100 transition-colors">{totalItems}</strong>
                </span>
            </div>

        </div>
    );
}