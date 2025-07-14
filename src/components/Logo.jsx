import logo from "../assets/icons/logo.svg";
function Logo(){
    const icon = "w-20 h-20 mr-1";
    return(
        <div
            className="flex items-center ml-0"
            >
                <img src={logo} className={icon}/>

                <div>
                    <h1 className="font-bold text-gray-900 leading-none text-1xl">
                    Amen&Louay
                    </h1>
                    <h1 className="text-xs tracking-widest uppercase text-gray-700 mt-0.5 ">
                        FASHION
                    </h1>
                </div>
        </div>
    );
}
export default Logo;