import { useState } from "react";
import pen from "../../assets/pencil-line.svg";
import del from "../../assets/delete.svg";
import av from "../../assets/Avatars.svg";
import user from "../../assets/user.svg";
import pass from "../../assets/lock.svg";
import email from "../../assets/email.svg";
import { Globe, MapPin, UserRoundX } from "lucide-react";
import DropdownSelect from "../../features/dropdown/DropdownSelect";

// --- Configuration Options ---
const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "id", label: "Indonesian" },
];

const TIMEZONE_OPTIONS = [
  { value: "asia/jakarta", label: "Asia/Jakarta" },
  { value: "asia/kolkata", label: "Asia/Kolkata" },
  { value: "america/new_york", label: "America/New_York" },
  { value: "europe/london", label: "Europe/London" },
];

// --- Main Profile Settings Component ---
export default function ProfileSetting() {
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [timezone, setTimezone] = useState(TIMEZONE_OPTIONS[0]);

  return (
    <>
      <div className="flex flex-col bg-white/80 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-8 xl:p-12 divide-y divide-slate-100 dark:divide-slate-800 gap-8 xl:gap-10 shadow-sm border border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
        {/* Section 1: Profile & Avatar */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16 w-full pt-2">
          <div className="flex flex-col md:w-1/3 xl:w-1/4">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-slate-800 dark:text-slate-100 transition-colors">
              Profile
            </h2>
            <p className="text-sm xl:text-base text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
              Your personal information and account security settings.
            </p>
          </div>

          <div className="flex flex-col gap-6 xl:gap-8 md:w-2/3 xl:w-3/4 max-w-4xl">
            {/* Avatar Uploader */}
            <div className="flex flex-col gap-3">
              <span className="text-sm xl:text-base font-medium text-slate-700 dark:text-slate-300 transition-colors">
                Avatar
              </span>
              <div className="flex flex-wrap items-center gap-4 xl:gap-6">
                <img
                  src={av}
                  alt="avatar"
                  className="w-14 h-14 xl:w-18 xl:h-18 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-sm xl:text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <img src={pen} alt="Edit" className="h-4 w-4 dark:opacity-80" />
                    Change
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 border border-red-200 dark:border-red-900/40 bg-red-50/50 dark:bg-red-950/30 rounded-xl text-sm xl:text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors cursor-pointer"
                  >
                    <img src={del} alt="Delete" className="h-4 w-4 dark:opacity-80" />
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm xl:text-base font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  Full Name
                </label>
                <div className="flex items-center gap-2.5 h-11 xl:h-12 px-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:ring-blue-950/50 transition-all">
                  <img src={user} alt="user icon" className="h-4 w-4 opacity-60 dark:opacity-40" />
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full bg-transparent text-sm xl:text-base text-slate-800 dark:text-slate-100 outline-none placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm xl:text-base font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  Email
                </label>
                <div className="flex items-center gap-2.5 h-11 xl:h-12 px-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:ring-blue-950/50 transition-all">
                  <img src={email} alt="email icon" className="h-4 w-4 opacity-60 dark:opacity-40" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-transparent text-sm xl:text-base text-slate-800 dark:text-slate-100 outline-none placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm xl:text-base font-medium text-slate-700 dark:text-slate-300 transition-colors">
                Password
              </label>
              <div className="flex items-center gap-2.5 h-11 xl:h-12 px-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 dark:focus-within:ring-blue-950/50 transition-all">
                <img src={pass} alt="password icon" className="h-4 w-4 opacity-60 dark:opacity-40" />
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full bg-transparent text-sm xl:text-base text-slate-800 dark:text-slate-100 outline-none placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Language & Region */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16 w-full pt-8 xl:pt-10">
          <div className="md:w-1/3 xl:w-1/4">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-slate-800 dark:text-slate-100 transition-colors">
              Language & Region
            </h2>
            <p className="text-sm xl:text-base text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
              Customize your language and regional timezone preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 md:w-2/3 xl:w-3/4 max-w-4xl">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm xl:text-base font-medium text-slate-700 dark:text-slate-300 transition-colors">
                Language
              </label>
              <DropdownSelect
                options={LANGUAGE_OPTIONS}
                selected={language}
                onChange={setLanguage}
                Icon={Globe}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm xl:text-base font-medium text-slate-700 dark:text-slate-300 transition-colors">
                Timezone
              </label>
              <DropdownSelect
                options={TIMEZONE_OPTIONS}
                selected={timezone}
                onChange={setTimezone}
                Icon={MapPin}
              />
            </div>
          </div>
        </div>

        {/* Section 3: Danger Zone */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16 w-full pt-8 xl:pt-10">
          <div className="md:w-1/3 xl:w-1/4">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-red-600 dark:text-red-400 transition-colors">
              Danger Zone
            </h2>
            <p className="text-sm xl:text-base text-slate-500 dark:text-slate-400 mt-1 leading-relaxed transition-colors">
              Proceed with caution.
            </p>
          </div>
          <div className="md:w-2/3 xl:w-3/4 max-w-4xl">
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 xl:py-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 hover:bg-red-100/80 dark:hover:bg-red-950/60 transition-colors rounded-xl text-sm xl:text-base font-medium text-red-600 dark:text-red-400 cursor-pointer"
            >
              <UserRoundX size={18} />
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}