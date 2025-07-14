import PageNotFound from "../PageNotFound.jsx";
import { TYPE, CATEGORY } from "../../utils/enums.js";
const brands = [
  'ALL',
  'Nike',
  'Adidas',
  'Zara',
  'Gucci',
  'H&M',
  'Puma',
  'Disney',
  'Levi’s',
  'Michael Kors',
  'Tommy Hilfiger',
  'Zara Kids',
  'H&M Kids',
  'Hunter',
];

const MainNav = ({ type, selectedCategory, selectedType, selectedStatus, selectedBrand, onSelectCategory, onSelectType, onSelectStatus, onSelectBrand }) => {
    const topCategories = [
        { name: 'women', value: CATEGORY.WOMEN },
        { name: 'men', value: CATEGORY.MEN },
        { name: 'kids', value: CATEGORY.KIDS },
    ];
    const subCategories = [
        { name: 'sale', value: 'SALE' },
        { name: 'new', value: 'NEW' },
        { name: 'clothing', value: 'CLOTHING' },
        { name: 'shoes', value: 'SHOES' },
        { name: 'accessories', value: 'ACCESSORIES' },
        { name: 'brands', value: 'BRANDS' }
    ];
    const titles = "text-xs tracking-widest uppercase text-gray-700";
    const style = "text-xs tracking-widest uppercase text-gray-700";

    if (type === 'top') {
        return (
            <nav>
                <ul className="flex space-x-6 ml-3 mt-2 list-none shadow-sm">
                    {topCategories.map(cat => (
                        <li key={cat.value}>
                            <button
                                className={
                                    `${titles} px-2 py-1 rounded ${selectedCategory === cat.value ? 'bg-black text-white' : ''}`
                                }
                                onClick={() => onSelectCategory && onSelectCategory(selectedCategory === cat.value ? '' : cat.value)}
                            >
                                {cat.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    } else if (type === 'sub') {
        return (
            <nav>
                <ul className="flex space-x-6 ml-3 list-none items-center">
                    {/* Status */}
                    <li>
                        <button
                            className={`${style} px-2 py-1 rounded ${selectedStatus === 'SALE' ? 'bg-black text-white' : ''}`}
                            onClick={() => onSelectStatus && onSelectStatus(selectedStatus === 'SALE' ? 'ALL' : 'SALE')}
                        >
                            Sale
                        </button>
                    </li>
                    <li>
                        <button
                            className={`${style} px-2 py-1 rounded ${selectedStatus === 'NEW' ? 'bg-black text-white' : ''}`}
                            onClick={() => onSelectStatus && onSelectStatus(selectedStatus === 'NEW' ? 'ALL' : 'NEW')}
                        >
                            New
                        </button>
                    </li>
                    {/* Type */}
                    <li>
                        <button
                            className={`${style} px-2 py-1 rounded ${selectedType === TYPE.CLOTHING ? 'bg-black text-white' : ''}`}
                            onClick={() => onSelectType && onSelectType(selectedType === TYPE.CLOTHING ? '' : TYPE.CLOTHING)}
                        >
                            Clothing
                        </button>
                    </li>
                    <li>
                        <button
                            className={`${style} px-2 py-1 rounded ${selectedType === TYPE.SHOES ? 'bg-black text-white' : ''}`}
                            onClick={() => onSelectType && onSelectType(selectedType === TYPE.SHOES ? '' : TYPE.SHOES)}
                        >
                            Shoes
                        </button>
                    </li>
                    <li>
                        <button
                            className={`${style} px-2 py-1 rounded ${selectedType === TYPE.ACCESSORIES ? 'bg-black text-white' : ''}`}
                            onClick={() => onSelectType && onSelectType(selectedType === TYPE.ACCESSORIES ? '' : TYPE.ACCESSORIES)}
                        >
                            Accessories
                        </button>
                    </li>
                    {/* Brand Dropdown */}
                    <li>
                        <select
                            className="ml-2 px-2 py-1 rounded border text-xs"
                            value={selectedBrand}
                            onChange={e => onSelectBrand && onSelectBrand(e.target.value)}
                        >
                            {brands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return <h1>ERROR Nav Type Not Specified</h1>;
    }
};
export default MainNav;