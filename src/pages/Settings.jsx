import { useState } from "react";
import ProfileSetting from "../components/setting/ProfileSetting";
import AISetting from "../components/setting/AISetting";

export default function Settings() {
  const [settings, setSettings] = useState(true);

  return (
    <section className="p-3 sm:p-4 lg:p-4 xl:p-4 w-full max-w-7xl 2xl:max-w-360 xl:min-w-full">
      <div className="flex flex-col p-4 sm:p-6 lg:p-5 xl:p-10 rounded-2xl gap-6 xl:gap-8 pb-12 sm:pb-16 xl:pb-20 bg-[#F3F7FF] dark:bg-slate-900 border border-transparent dark:border-slate-800 transition-colors duration-200">

        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold dark:text-slate-100 text-slate-800 tracking-tight transition-colors">
            Setting Profile & AI
          </h1>
          <p className="text-sm sm:text-base xl:text-lg text-slate-500 dark:text-slate-400 transition-colors">
            You can update profile or customizable AI
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-full bg-white dark:bg-slate-800/80 p-1 w-full sm:w-96 xl:w-105 border dark:border-slate-700 border-slate-200 shadow-inner transition-colors duration-200">
          <button
            type="button"
            onClick={() => setSettings(true)}
            className={`flex-1 rounded-full py-2.5 xl:py-3 text-xs sm:text-sm xl:text-base font-semibold transition-all cursor-pointer ${settings
                ? "bg-blue-500 text-white shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
          >
            Profile Settings
          </button>
          <button
            type="button"
            onClick={() => setSettings(false)}
            className={`flex-1 rounded-full py-2.5 xl:py-3 text-xs sm:text-sm xl:text-base font-semibold transition-all cursor-pointer ${!settings
                ? "bg-blue-500 text-white shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
          >
            Customize Your AI
          </button>
        </div>

        {/* Main Settings Card */}
        {settings ? <ProfileSetting /> : <AISetting />}

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 xl:gap-4 pt-2">
          <button
            type="button"
            className="w-full sm:w-auto px-6 xl:px-8 py-2.5 xl:py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium text-sm xl:text-base hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 xl:px-8 py-2.5 xl:py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm xl:text-base shadow-sm transition-colors cursor-pointer"
          >
            Save Changes
          </button>
        </div>

      </div>
    </section>
  );
}