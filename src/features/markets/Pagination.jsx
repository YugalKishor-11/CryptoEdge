// src/components/Dashboard/Markets/Pagination.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, setPage, perPage, setPerPage, totalItems = 180 }) {
    const totalPages = Math.ceil(totalItems / perPage);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 py-3 px-2 text-sm text-slate-600">

            {/* Left side: Page navigation pills */}
            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft size={16} />
                </button>

                {/* Page 1 */}
                <button
                    onClick={() => setPage(1)}
                    className={`h-10 w-10 rounded-full font-medium transition-colors ${page === 1 ? "bg-blue-500 text-white shadow-sm" : "border border-slate-200 bg-white hover:bg-slate-50"
                        }`}
                >
                    1
                </button>

                {/* Page 2 */}
                {totalPages >= 2 && (
                    <button
                        onClick={() => setPage(2)}
                        className={`h-10 w-10 rounded-full font-medium transition-colors ${page === 2 ? "bg-blue-500 text-white shadow-sm" : "border border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                    >
                        2
                    </button>
                )}

                {/* Ellipsis if far along */}
                {page > 4 && <span className="px-1 text-slate-400">..</span>}

                {/* Dynamic Middle/Current state if needed, or static indicator matching design */}
                {page > 2 && page < totalPages - 1 && (
                    <button className="h-10 w-10 rounded-full bg-blue-500 text-white font-medium shadow-sm">
                        {page}
                    </button>
                )}

                <span className="px-1 text-slate-400">..</span>

                {/* Second to Last Page */}
                {totalPages >= 10 && (
                    <button
                        onClick={() => setPage(totalPages - 1)}
                        className={`h-10 w-10 rounded-full font-medium transition-colors ${page === totalPages - 1 ? "bg-blue-500 text-white shadow-sm" : "border border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                    >
                        {totalPages - 1}
                    </button>
                )}

                {/* Last Page */}
                {totalPages >= 10 && (
                    <button
                        onClick={() => setPage(totalPages)}
                        className={`h-10 w-10 rounded-full font-medium transition-colors ${page === totalPages ? "bg-blue-500 text-white shadow-sm" : "border border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                    >
                        {totalPages}
                    </button>
                )}

                {/* Next Button */}
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Right side: Items per page selector & Total count */}
            <div className="flex items-center gap-3">
                <span className="text-slate-500 font-medium">Show</span>
                <select
                    value={perPage}
                    onChange={(e) => {
                        setPerPage(Number(e.target.value));
                        setPage(1); // Reset to page 1 on limit change
                    }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-xs cursor-pointer"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
                <span className="text-slate-500 font-medium">from <strong className="text-slate-800">{totalItems}</strong></span>
            </div>

        </div>
    );
}