import searchIcon from "../../assets/icons/magnifying-glass.svg"
function SearchBar({ value, onChange }) {
    const icon = "w-4 h-4 mr-1";
    return(
        <ul className="flex  space-x-6 ml-3 mt-2 ">
            <div className="flex items-center rounded-md px-3 py-2 w-full md:w-96 transition-all duration-200 ease-in-out flex-shrink border mr-5">
                <img src={searchIcon} className={icon}/>
                <input
                    type={"text"}
                    placeholder={"Search..."}
                    className="text-gray-500 flex-grow outiline-none bg-transparent"
                    value={value}
                    onChange={e => onChange && onChange(e.target.value)}
                />
            </div>
        </ul>
    );
}
export default SearchBar;