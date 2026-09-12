import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LogoutModal({ isOpen, onClose, }) {
    const navigate = useNavigate();
    if (!isOpen) return null;


    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login", { replace: true });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

            {/* Modal Container */}
            <div className="relative w-full max-w-[400px] rounded-[32px] bg-white p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 p-1 text-gray-400 transition-colors hover:text-gray-700 cursor-pointer"
                >
                    <X size={20} strokeWidth={2.5} />
                </button>

                {/* Icon */}
                <div className="mx-auto mt-2 flex h-24 w-24 items-center justify-center rounded-full bg-rose-50">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#E82B57] shadow-sm">
                        <Trash2 size={28} className="text-white" strokeWidth={2} />
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="mt-6 text-[22px] font-bold text-gray-900">Logout ?</h2>
                <p className="mt-2 text-sm font-medium text-gray-500">
                    Are you sure want to logout?
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex w-full gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 rounded-full border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleLogout}
                        className="flex-1 rounded-full bg-gradient-to-r from-[#E82B57] to-[#F24E6D] py-3.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 cursor-pointer"
                    >
                        Yes, Logout
                    </button>
                </div>

            </div>
        </div>
    );
}