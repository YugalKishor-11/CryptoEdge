// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronDown, User, Settings, LogOut } from "lucide-react";
// import image from "../../assets/Intersect.svg"
// import ThemeMode from "../../features/theme/ThemeMode";
// function UserMenu() {
//     const [isOpen, setIsOpen] = useState(false);
//     const menuRef = useRef(null);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         // 1. Clear the authentication state
//         localStorage.removeItem("isAuthenticated");

//         // 2. Redirect the user to the login page
//         navigate("/login", { replace: true });
//     };
//     const handlesetting= ()=>{
//         navigate("/settings")
//     }

//     // Close menu when clicking outside
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (
//                 menuRef.current &&
//                 !menuRef.current.contains(event.target)
//             ) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener(
//                 "mousedown",
//                 handleClickOutside
//             );
//         };
//     }, []);

//     return (
//         <div className="relative" ref={menuRef}>

//             {/* User Button */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="
//                     flex
//                     items-center
//                     gap-2
//                     p-1
//                     rounded-full
//                     hover:bg-slate-100
//                     dark:hover:bg-slate-800
//                 "
//             >

//                 {/* Avatar */}
//                 <div
//                     className="
//                         w-9
//                         h-9
//                         rounded-full

//                         text-white
//                         flex
//                         items-center
//                         justify-center
//                         font-semibold
//                     "
//                 >
//                     <img src={image} alt="profile" />
//                 </div>

//                 {/* Name */}
//                 <span className="hidden sm:block text-sm font-medium">
//                     {/* Yugal */}
//                 </span>

//                 {/* Arrow */}
//                 <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
//                         }`}
//                 />

//             </button>


//             {/* Dropdown */}
//             {isOpen && (
//                 <div
//                     className="
//                         absolute
//                         right-0
//                         top-12
//                         w-52
//                         rounded-xl
//                         border
//                         border-slate-200
//                         bg-white
//                         shadow-lg
//                         p-2
//                         z-50

//                         dark:border-slate-700
//                         dark:bg-slate-900
//                     "
//                 >

//                     {/* Profile */}
//                     <button
//                         className="
//                             flex
//                             items-center
//                             gap-3
//                             w-full
//                             px-3
//                             py-2
//                             rounded-lg
//                             text-left
//                             hover:bg-slate-100
//                             dark:hover:bg-slate-800
//                         "
//                         onClick={handlesetting}
//                     >
//                         <User size={18} />

//                         <span>
//                             Profile
//                         </span>
//                     </button>


//                     {/* Settings */}
//                     <button
//                         className="
//                             flex
//                             items-center
//                             gap-3
//                             w-full
//                             px-3
//                             py-2
//                             rounded-lg
//                             text-left
//                             hover:bg-slate-100
//                             dark:hover:bg-slate-800
//                         "
//                     >
//                         <Settings size={18} />

//                         <span>
//                             Settings
//                         </span>
//                     </button>

//                     <ThemeMode/>


//                     {/* Divider */}
//                     <div className="my-2 border-t border-slate-200 dark:border-slate-700" />


//                     {/* Logout */}
//                     <button
//                         className="
//                             flex
//                             items-center
//                             gap-3
//                             w-full
//                             px-3
//                             py-2
//                             rounded-lg
//                             text-left
//                             text-red-500
//                             hover:bg-red-50
//                             dark:hover:bg-red-950
//                         "
//                         onClick={handleLogout}
//                     >
//                         <LogOut size={18} />

//                         <span>
//                             Logout
//                         </span>
//                     </button>

//                 </div>
//             )}

//         </div>
//     );
// }

// export default UserMenu;

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import image from "../../assets/Intersect.svg";
import ThemeMode from "../../features/theme/ThemeMode";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login", { replace: true });
  };

  const handleSetting = () => {
    navigate("/settings");
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>

      {/* User Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 p-1 rounded-full
          hover:bg-slate-100
          dark:hover:bg-slate-800
          transition-colors duration-200
        "
      >
        {/* Avatar */}
        <div
          className="
            w-9 h-9
            rounded-full
            flex items-center justify-center
            font-semibold
          "
        >
          <img
            src={image}
            alt="profile"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Name */}
        <span
          className="
            hidden sm:block
            text-sm font-medium
            text-slate-900
            dark:text-white
          "
        >
          {/* Yugal */}
        </span>

        {/* Arrow */}
        <ChevronDown
          size={16}
          className={`
            text-slate-700
            dark:text-slate-300
            transition-transform duration-200
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute right-0 top-12 z-50
            w-52
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-900
            shadow-lg
            p-2

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
          "
        >

          {/* Profile */}
          <button
            onClick={handleSetting}
            className="
              flex items-center gap-3
              w-full
              px-3 py-2
              rounded-lg
              text-left

              text-slate-700
              hover:bg-slate-100

              dark:text-slate-200
              dark:hover:bg-slate-800

              transition-colors
            "
          >
            <User size={18} />

            <span>
              Profile
            </span>
          </button>

          {/* Settings */}
          <button
            onClick={handleSetting}
            className="
              flex items-center gap-3
              w-full
              px-3 py-2
              rounded-lg
              text-left

              text-slate-700
              hover:bg-slate-100

              dark:text-slate-200
              dark:hover:bg-slate-800

              transition-colors
            "
          >
            <Settings size={18} />

            <span>
              Settings
            </span>
          </button>

          {/* Theme */}
          <div className="flex ">
            <ThemeMode />

          </div>


          {/* Divider */}
          <div
            className="
              my-2
              border-t
              border-slate-200
              dark:border-slate-700
            "
          />

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-3
              w-full
              px-3 py-2
              rounded-lg
              text-left

              text-red-500
              hover:bg-red-50

              dark:text-red-400
              dark:hover:bg-red-950

              transition-colors
            "
          >
            <LogOut size={18} />

            <span>
              Logout
            </span>
          </button>

        </div>
      )}
    </div>
  );
}

export default UserMenu;