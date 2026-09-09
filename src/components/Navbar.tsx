import { useState } from "react";
import Logo from "../assets/logo.png";
import CoinIcon from "../assets/coin-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

interface Coin {
    coin: number
}

const Navbar = ({ coin }: Coin) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    

    return (
        <div className="relative">
            <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
                <div>
                    <img className="max-w-14 md:max-w-16 cursor-pointer" src={Logo} alt="Logo" />
                </div>
                
                <div className="flex lg:hidden items-center gap-3">
                    <div className="flex items-center cursor-pointer gap-1.5 border border-gray-200 py-1.5 px-3 rounded-md shadow-xs">
                        <span className="font-semibold text-sm">{coin} Coin</span>
                        <img className="max-w-5" src={CoinIcon} alt="Coin" />
                    </div>
                    <div 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-2xl cursor-pointer p-1"
                    >
                        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-12">
                    <ul className="flex items-center gap-8 text-gray-600 font-medium">
                        <li className="cursor-pointer hover:text-black transition-colors">Home</li>
                        <li className="cursor-pointer hover:text-black transition-colors">Fixture</li>
                        <li className="cursor-pointer hover:text-black transition-colors">Teams</li>
                        <li className="cursor-pointer hover:text-black transition-colors">Schedules</li>
                    </ul>
                    <div className="flex items-center cursor-pointer gap-1.5 border border-gray-200 py-2 px-3 rounded-md shadow-xs hover:border-gray-300 transition-all">
                        <span className="font-semibold">${coin} Coin</span>
                        <img className="max-w-6.5" src={CoinIcon} alt="Coin" />
                    </div>
                </div>
            </nav>

            <div 
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                    <img className="max-w-12" src={Logo} alt="Logo" />
                    <div 
                        onClick={() => setIsOpen(false)} 
                        className="text-2xl cursor-pointer p-1 hover:bg-gray-100 rounded-full"
                    >
                        <IoClose />
                    </div>
                </div>

                <ul className="flex flex-col gap-6 text-gray-700 font-medium text-lg">
                    <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-black transition-colors">Home</li>
                    <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-black transition-colors">Fixture</li>
                    <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-black transition-colors">Teams</li>
                    <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-black transition-colors">Schedules</li>
                </ul>
            </div>

            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs transition-opacity"
                ></div>
            )}
        </div>
    );
};

export default Navbar;