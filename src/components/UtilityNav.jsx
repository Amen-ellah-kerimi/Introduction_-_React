import mapPin from '../assets/icons/map-pin.svg';
import support from '../assets/icons/support.svg';
function UtilityNav() {
    const icon = "w-5 h-5 mr-1";
    const link = "flex items-center hover:text-gray-900 transition-colors duration-200";
    return (
        <div className="flex space-x-6 text-gray-700 text-sm ml-40 mr">
                <a href="#" className={link}>
                    <img src={support} alt="support.svg" className={icon} />
                    Support
                </a>
            <a href="#" className={link}>
                    <img src={mapPin} alt="map-pin.svg" className={icon}/>
                    Find a Store
            </a>
        </div>
    );
}
export default UtilityNav;