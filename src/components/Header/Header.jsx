import Logo from "../Logo.jsx";
import UtilityNav from "../UtilityNav.jsx";
import SideNav from "./SideNav.jsx";
import MainNav from "./MainNav.jsx";
import SearchBar from "./SearchBar.jsx";

function Header({
    selectedCategory,
    selectedType,
    selectedStatus,
    selectedBrand,
    onSelectCategory,
    onSelectType,
    onSelectStatus,
    onSelectBrand,
    search,
    onSearchChange
}){
    return(
        <header>
            <div className="bg-white py-1 flex justify-between items-center container mx-auto px-1 mb-4">
                <Logo/>
                <UtilityNav/>
                <SideNav/>
            </div>
            <MainNav type={'top'} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory}/>
            <div className="flex items-center justify-between">
                <MainNav
                    type={'sub'}
                    selectedType={selectedType}
                    selectedStatus={selectedStatus}
                    selectedBrand={selectedBrand}
                    onSelectType={onSelectType}
                    onSelectStatus={onSelectStatus}
                    onSelectBrand={onSelectBrand}
                />
                <SearchBar value={search} onChange={onSearchChange}/>
            </div>
        </header>
    );
}

export default Header;
