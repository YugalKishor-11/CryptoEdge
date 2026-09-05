
import Logo from "../../assets/SearchLine.svg"

export default function SearchBar({ value, onChange, onClick, placeholder = "Search for assets..." }) {
    return (
        <div className=" items-center gap-2 w-56 h-10 px-3 rounded-full bg-slate-100 border border-slate-200
        hidden xl:flex  py-2 ">

            <img
                src={Logo}
                alt="Company Logo"
                className="w-5 h-auto"
                onClick={onClick}
                // onClick={() => alert("The image was clicked!")}
            />

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full 
                    bg-transparent
                    outline-none
                    border-none
                    text-sm
                    text-slate-800
                    placeholder:text-[#666D80] 
                    placeholder:font-medium
                "
            />
        </div>
    );
}

