import heart from "../../assets/icons/heart.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/shopping-bag.svg";

function SideNav() {
    const icon = "w-5 h-5 mr-1";
    return (
        <div className="flex space-x-6 text-gray-700 text-sm">
            <a href="#">
                <img src={heart} alt="support.svg" className={icon} />
            </a>
            <a href="#">
                <img src={user} alt="map-pin.svg" className={icon}/>
            </a>
            <a href="#">
                <img src={cart} alt="map-pin.svg" className={icon}/>
            </a>
        </div>
    );
}
export default SideNav;