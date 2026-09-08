// src/pages/LoginField.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import crypto from "../assets/cryptoedge.svg"

export default function LoginField() {
    const [isLoginTab, setIsLoginTab] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/home");
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#f5f5fa] p-4 lg:p-6">
            <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-100 lg:grid-cols-2">

                {/* LEFT SIDE: Promotional Banner / Image Placeholder */}
                <div className="relative flex flex-col justify-between bg-slate-200 p-8 lg:p-10 border-r border-slate-100">
                    <div>
                        <div className="flex h-full w-full  rounded-2xl border-2   lg:block  bg-slate-500 text-slate-400 font-medium">
                            <img src={crypto} alt="crypto" className="w-auto h-90 " />
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-white shadow-sm">
                                <span className="font-bold text-sm">C</span>
                            </div>
                            <span className="font-bold text-slate-900 tracking-tight text-3xl">CryptoMind</span>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                            Welcome Screen: Simplify Your Crypto Journey
                        </h2>

                    </div>
                </div>

                {/* RIGHT SIDE: Authentication Form */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">Hi, Welcome</h2>
                        <p className="text-xs lg:text-sm text-slate-400 mt-1">Please login to entry cryptomind</p>
                    </div>

                    {/* Segmented Switcher (Login / Sign Up) */}
                    <div className="flex rounded-full bg-slate-100 p-1 mb-6">
                        <button
                            type="button"
                            onClick={() => setIsLoginTab(true)}
                            className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-all ${isLoginTab ? "bg-black text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLoginTab(false)}
                            className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-all ${!isLoginTab ? "bg-black text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
                            <div className="relative flex items-center">
                                <Mail size={16} className="absolute left-3.5 text-slate-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="fajar@gmail.com"
                                    required
                                    className="w-full rounded-full border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1.5">Password</label>
                            <div className="relative flex items-center">
                                <Lock size={16} className="absolute left-3.5 text-slate-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    required
                                    className="w-full rounded-full border border-slate-200 py-3 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs py-1">
                            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                                <input type="checkbox" className="rounded border-slate-300 text-blue-500 focus:ring-blue-500/20 h-4 w-4" />
                                Remember me
                            </label>
                            <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">
                                Forgot Password ?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-blue-500 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-600 transition-colors cursor-pointer mt-2"
                        >
                            Login
                        </button>
                    </form>

                    <div className="relative my-6 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        <span className="relative bg-white px-3 text-[11px] uppercase tracking-wider text-slate-400">
                            Or Sign in with
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.2v3.15C3.21 21.32 7.26 24 12 24z" />
                                <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.2C.43 8.15 0 9.99 0 12s.43 3.85 1.2 5.4l4.07-3.16z" />
                                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.26 0 3.21 2.68 1.2 6.6l4.07 3.15c.95-2.85 3.6-4.96 6.73-4.96z" />
                            </svg>
                            Sign in with Google
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.25c.61-.75 1.02-1.8 0.91-2.85-.9.04-1.99.6-2.62 1.35-.57.65-1.07 1.71-.94 2.74 1.01.08 2.04-.49 2.65-1.24z" />
                            </svg>
                            Sign in with Apple
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}