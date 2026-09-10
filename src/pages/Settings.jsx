// import { useState } from "react"
// import pen from "../assets/pencil-line.svg";
// import del from '../assets/delete.svg'
// import av from '../assets/Avatars.svg'
// import user from '../assets/user.svg'
// import pass from '../assets/lock.svg'
// import email from '../assets/email.svg'
// import { Globe, MapPin, ChevronDown, UserRoundX } from "lucide-react";
// export default function Settings() {
//     const [settings, setSettings] = useState(true);
//     return (
//         <>

//             <section className=" p-4">
//                 <div className="flexflex-col p-4 bg-[#edf3f9] rounded-2xl gap-5 pb-20">

//                     <div className="flex flex-col">
//                         <h1 className="text-xl ">
//                             Setting Profile & AI
//                         </h1>
//                         <p className="text-slate-500">You can update profile or customizable AI</p>
//                     </div>

//                     <div className="flex rounded-full bg-[#F6F8FA] p-1 my-5 w-96 border border-slate-200">
//                         <button
//                             type="button"
//                             onClick={() => setSettings(true)}
//                             className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-all 
//                         ${settings ? "bg-blue-400 text-white shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
//                         >
//                             Profile Settings
//                         </button>
//                         <button
//                             type="button"
//                             onClick={() => setSettings(false)}
//                             className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-all
//                         ${!settings ? "bg-blue-400 text-white shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
//                         >
//                             Customize Your AI
//                         </button>

//                     </div>
//                     <div className="flex flex-col bg-white rounded-2xl p-4 ">
//                         <div className="flex gap-10 w-full mb-6">
//                             <div className="flex flex-col lg:w-1/3 ">
//                                 <h1 className="text-2xl">
//                                     Profile
//                                 </h1>
//                                 <p className="text-slate-500">
//                                     Your Personal information and <span>account</span>
//                                     security settings.
//                                 </p>
//                             </div>
//                             <div className="flex flex-col gap-3 lg:w-2/3">
//                                 <div className="gap-2">
//                                     <div className="flex items-center">
//                                         <p>Avatar</p>
//                                     </div>

//                                     <div className="flex gap-3">
//                                         <img src={av} alt="avatar" className="" />
//                                         <div className="flex gap-3 items-center">
//                                             <button
//                                                 className="flex w-28 h-10.5 items-center justify-around border border-slate-300 rounded-2xl text-slate-500"
//                                             >
//                                                 <img src={pen} alt="pen" className="h-5" />
//                                                 Change
//                                             </button>
//                                             <button
//                                                 className="flex w-28 h-10.5 items-center justify-around border border-red-600 rounded-2xl text-red-600"
//                                             >
//                                                 <img src={del} alt="del" className="h-5" />
//                                                 Delete
//                                             </button>

//                                         </div>

//                                     </div>

//                                 </div>

//                                 <div className="flex gap-5 w-min-100">
//                                     <div className="flex flex-col w-full">
//                                         <label htmlFor="">Full Name</label>
//                                         <div className=" items-center gap-2 lg:w-full h-10 px-3 rounded-full bg-slate-100 border
//                                          border-slate-200 hidden xl:flex  py-2 ">
//                                             <img src={user} alt="user" />
//                                             <input type="text" name="" id=""
//                                                 className="w-full  bg-slate-100  outline-none border-none" />
//                                         </div>

//                                     </div>
//                                     <div className="flex flex-col w-full">
//                                         <label htmlFor="">Email</label>
//                                         <div className=" items-center gap-2 lg:w-full h-10 px-3 rounded-full bg-slate-100 border
//                                          border-slate-200 hidden xl:flex  py-2 ">
//                                             <img src={email} alt="email" />
//                                             <input type="text" name="" id=""
//                                                 className="w-full  bg-slate-100 outline-none border-none" />
//                                         </div>

//                                     </div>

//                                 </div>
//                                 <div className="">
//                                     <div className="flex flex-col w-full">
//                                         <label htmlFor="">Password</label>
//                                         <div className=" items-center gap-2 lg:w-full h-10 px-3 rounded-full bg-slate-100 border
//                                          border-slate-200 hidden xl:flex  py-2 ">
//                                             <img src={pass} alt="pass" />
//                                             <input type="password" name="" id=""
//                                                 className="w-full  bg-slate-100 h-10 outline-none border-none" />
//                                         </div>

//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className="flex w-full gap-10 my-6">
//                             <div className="lg:w-1/3 ">
//                                 <div className="w-full">
//                                     <h1 className="text-xl">Language & Region</h1>
//                                     <p className="text-slate-500">Customize your language and region. </p>
//                                 </div>


//                             </div>

//                             <div className="flex lg:w-2/3 gap-5">
//                                 <div className="flex w-full gap-5">

//                                     <div className="flex flex-col w-full">
//                                         <label htmlFor="">Language</label>
//                                         <div className="flex justify-between items-center px-2 h-10 border border-slate-300 rounded-2xl">
//                                             <div className="flex gap-2">
//                                                 <Globe />
//                                                 <p>English</p>
//                                             </div>
//                                             <div className="w">
//                                                 <ChevronDown />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col w-full">
//                                         <label htmlFor="">Language</label>
//                                         <div className="flex justify-between items-center px-2 h-10 border border-slate-300 rounded-2xl">
//                                             <div className="flex gap-2">
//                                                 <MapPin />
//                                                 <p>Asia/Jakarta</p>
//                                             </div>
//                                             <div className="w">
//                                                 <ChevronDown />
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>



//                             </div>

//                         </div>

//                         <div className="flex w-full gap-10 my-6">
//                             <div className="w-1/3">
//                                 <h1 className="text-xl">Danger Zone</h1>
//                                 <p className="text-slate-500">Proceed with caution</p>
//                             </div>
//                             <div className="w-2/3">
//                                 <div className="flex ">
//                                     <button className="flex w-40 h-10 bg-red-50 border border-red-300 items-center justify-between rounded-2xl px-2">
//                                         <UserRoundX size={18} color="red" />
//                                         <p className="text-red-600">Delete Account</p>
//                                     </button>


//                                 </div>
//                             </div>
//                         </div>




//                     </div>
//                     <div className="flex justify-end pt-5">
//                         <div className="flex gap-3">
//                             <div className="flex border h-13 w-25 items-center justify-center bg-slate-300 border-slate-200 rounded-3xl">
//                                 <button>Cancel</button>
//                             </div>
//                             <div className="flex border h-13 w-37.5 items-center justify-center bg-blue-400 border-slate-200 rounded-3xl">
//                                 <button>Save Changes</button>
//                             </div>
//                         </div>

//                     </div>






//                 </div>
//             </section>
//         </>
//     )
// }

import { useState } from "react";
import pen from "../assets/pencil-line.svg";
import del from "../assets/delete.svg";
import av from "../assets/Avatars.svg";
import user from "../assets/user.svg";
import pass from "../assets/lock.svg";
import email from "../assets/email.svg";
import { Globe, MapPin, ChevronDown, UserRoundX } from "lucide-react";

export default function Settings() {
  const [settings, setSettings] = useState(true);

  return (
    <section className="p-3 sm:p-4 lg:p-4 xl:p-4 w-full max-w-7xl 2xl:max-w-360 xl:min-w-full">
      <div className="flex flex-col p-4 sm:p-6 lg:p-5 xl:p-10 bg-[#edf3f9] rounded-2xl gap-6 xl:gap-8 pb-12 sm:pb-16 xl:pb-20">
        
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold text-slate-800 tracking-tight">
            Setting Profile & AI
          </h1>
          <p className="text-sm sm:text-base xl:text-lg text-slate-500">
            You can update profile or customizable AI
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-full bg-[#F6F8FA] p-1 w-full sm:w-96 xl:w-105 border border-slate-200 shadow-inner">
          <button
            type="button"
            onClick={() => setSettings(true)}
            className={`flex-1 rounded-full py-2.5 xl:py-3 text-xs sm:text-sm xl:text-base font-semibold transition-all ${
              settings
                ? "bg-blue-500 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Profile Settings
          </button>
          <button
            type="button"
            onClick={() => setSettings(false)}
            className={`flex-1 rounded-full py-2.5 xl:py-3 text-xs sm:text-sm xl:text-base font-semibold transition-all ${
              !settings
                ? "bg-blue-500 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Customize Your AI
          </button>
        </div>

        {/* Main Settings Card */}
        <div className="flex flex-col bg-white rounded-2xl p-4 sm:p-8 xl:p-12 divide-y divide-slate-100 gap-8 xl:gap-10 shadow-sm border border-slate-200/60">
          
          {/* Section 1: Profile & Avatar */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16 w-full pt-2">
            <div className="flex flex-col md:w-1/3 xl:w-1/4">
              <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-slate-800">
                Profile
              </h2>
              <p className="text-sm xl:text-base text-slate-500 mt-1 leading-relaxed">
                Your personal information and account security settings.
              </p>
            </div>

            <div className="flex flex-col gap-6 xl:gap-8 md:w-2/3 xl:w-3/4 max-w-4xl">
              {/* Avatar Uploader */}
              <div className="flex flex-col gap-3">
                <span className="text-sm xl:text-base font-medium text-slate-700">Avatar</span>
                <div className="flex flex-wrap items-center gap-4 xl:gap-6">
                  <img
                    src={av}
                    alt="avatar"
                    className="w-14 h-14 xl:w-18 xl:h-18 rounded-full object-cover border border-slate-200"
                  />
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 border border-slate-300 rounded-xl text-sm xl:text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <img src={pen} alt="Edit" className="h-4 w-4" />
                      Change
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 border border-red-200 bg-red-50/50 rounded-xl text-sm xl:text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <img src={del} alt="Delete" className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm xl:text-base font-medium text-slate-700">
                    Full Name
                  </label>
                  <div className="flex items-center gap-2.5 h-11 xl:h-12 px-3.5 rounded-xl bg-slate-100/80 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <img src={user} alt="user icon" className="h-4 w-4 opacity-60" />
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full bg-transparent text-sm xl:text-base text-slate-800 outline-none placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm xl:text-base font-medium text-slate-700">
                    Email
                  </label>
                  <div className="flex items-center gap-2.5 h-11 xl:h-12 px-3.5 rounded-xl bg-slate-100/80 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <img src={email} alt="email icon" className="h-4 w-4 opacity-60" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full bg-transparent text-sm xl:text-base text-slate-800 outline-none placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm xl:text-base font-medium text-slate-700">
                  Password
                </label>
                <div className="flex items-center gap-2.5 h-11 xl:h-12 px-3.5 rounded-xl bg-slate-100/80 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <img src={pass} alt="password icon" className="h-4 w-4 opacity-60" />
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full bg-transparent text-sm xl:text-base text-slate-800 outline-none placeholder-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Language & Region */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16 w-full pt-8 xl:pt-10">
            <div className="md:w-1/3 xl:w-1/4">
              <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-slate-800">
                Language & Region
              </h2>
              <p className="text-sm xl:text-base text-slate-500 mt-1 leading-relaxed">
                Customize your language and regional timezone preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 md:w-2/3 xl:w-3/4 max-w-4xl">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm xl:text-base font-medium text-slate-700">
                  Language
                </label>
                <div className="flex justify-between items-center px-3.5 h-11 xl:h-12 border border-slate-300 rounded-xl cursor-pointer hover:border-slate-400 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700 text-sm xl:text-base">
                    <Globe size={18} className="text-slate-500" />
                    <span>English</span>
                  </div>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm xl:text-base font-medium text-slate-700">
                  Timezone
                </label>
                <div className="flex justify-between items-center px-3.5 h-11 xl:h-12 border border-slate-300 rounded-xl cursor-pointer hover:border-slate-400 transition-colors">
                  <div className="flex items-center gap-2 text-slate-700 text-sm xl:text-base">
                    <MapPin size={18} className="text-slate-500" />
                    <span>Asia/Jakarta</span>
                  </div>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Danger Zone */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-16 w-full pt-8 xl:pt-10">
            <div className="md:w-1/3 xl:w-1/4">
              <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-red-600">
                Danger Zone
              </h2>
              <p className="text-sm xl:text-base text-slate-500 mt-1 leading-relaxed">
                Proceed with caution.
              </p>
            </div>
            <div className="md:w-2/3 xl:w-3/4 max-w-4xl">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 xl:py-3 bg-red-50 border border-red-200 hover:bg-red-100/80 transition-colors rounded-xl text-sm xl:text-base font-medium text-red-600"
              >
                <UserRoundX size={18} />
                <span>Delete Account</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 xl:gap-4 pt-2">
          <button
            type="button"
            className="w-full sm:w-auto px-6 xl:px-8 py-2.5 xl:py-3 rounded-xl border border-slate-300 text-slate-600 font-medium text-sm xl:text-base hover:bg-slate-200/60 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 xl:px-8 py-2.5 xl:py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm xl:text-base shadow-sm transition-colors"
          >
            Save Changes
          </button>
        </div>

      </div>
    </section>
  );
}